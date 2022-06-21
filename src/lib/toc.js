import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { visit } from "unist-util-visit";
import { join as joinPath, dirname, basename } from "path";
import { toString } from "mdast-util-to-string";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkSlug from "remark-slug";

// toc cache for all posts
// each post entry will be generated once a post of the diretory is being rendered
// structure: { [title]: { [filename]: { mtime: float, headings: [string, string][] } } }
const TocFile = "./src/.toc-cache.json";

// Regexps for routeMapper
// extracts both the dir after src/routes/ as well as the filename from the absolute file path
const srcRegex = new RegExp(/src[\//]routes(?<path>[\//].*[\//]?)(?<filename>.*\.md)/);

/**
 * converts path to basic route (prone to errors)
 * @param {string} path
 * @return {string}
 * */
function routeMapper(path) {
  // WARNING: This is not strictly adhering to sveltekits router (I couldn't find the sluggify algorithm) and may be prone to errors
  // trace path back to src root

  // we are assuming that this will always match ... since otherwise the routing would have changed
  const urlParts = srcRegex.exec(path).groups;
  let url = urlParts.path;

  // all routes except index will need their filename attached to the url
  if (urlParts.filename !== "index.md") {
    url += urlParts.filename.replace(".md", "");
  }

  return url;
}

/**
 * collects all headings from a markdown file and extract [heading, id]
 * @type {import('unified').Plugin<[], import('mdast').Root>}
 * */
function tocCompiler() {
  /**
   * use tocCompiler to fetch headings
   * @type {import('unified').Compiler<Node<any>, [string, string][]>}
   */
  this.Compiler = (tree) => {
    let headlines = [];

    visit(tree, "heading", (node) => {
      if (node.depth <= 3) {
        headlines.push([toString(node), node.data.id]);
      }
    });

    return headlines;
  };
}

// Regexps for fetching frontmatter titles from a markdown file
const FrontmatterRegex = new RegExp(/^\+{3}\n(?<frontmatter>[^\+]*)\+{3}$/m);
const TitleRegex = new RegExp(/^title *= *["'](?<title>.+)['"] *$/m);

/**
 * use tocCompiler to fetch headings
 * @param {string} content
 * @return {[string, string][]}
 */
function collectSluggedHeadings(content) {
  return unified().use(remarkParse).use(remarkSlug).use(tocCompiler).processSync(content).result;
}

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
function tocPlugin() {
  return (_, file) => {
    // only entries with a title are elligable to have a TOC
    if (file.data.fm !== undefined && file.data.fm.title !== undefined) {
      // inject filename in data (used to identify current page when rendering toc)
      file.data.fm.filename = basename(file.filename);

      // parametes for checking cache
      const dir = dirname(file.filename),
        title = file.data.fm.title;

      // load or create toc cache
      let toc;
      try {
        toc = JSON.parse(readFileSync(TocFile));
      } catch (e) {
        toc = {};
      }

      // ensure title is defined in the toc cache
      if (toc[title] === undefined) {
        toc[title] = {};
      }

      // save all keys that need to be processed
      let keys = Object.keys(toc[title]),
        modifiedCounter = 0;

      // check mtime on all files in diretory
      readdirSync(dir, { encoding: "utf8" })
        // extract full path and filename
        .map((file) => [joinPath(dir, file), basename(file)])
        // filter out all non-markdown files
        .filter(([path, _name]) => path.endsWith(".md"))
        // check entries agains keys
        .map(([path, name]) => {
          const idx = keys.indexOf(name);
          if (idx === -1) {
            // if not part of the cache, add to modified (i.e., add new file)
            return [path, name, statSync(path).mtimeMs];
          } else {
            // if in cache, remove from cache and check if modified
            keys.splice(idx, 1);
            const sync = statSync(path).mtimeMs;

            if (toc[title][name].mtime !== sync || !toc[title][name].headings === {}) {
              return [path, name, sync];
            } else {
              return null;
            }
          }
        })
        // filter out all unmodified entries
        .filter((value) => value !== null)
        // sort by filename (will always prefer index.md as the lowest member)
        .sort((a, b) => {
          if (a[1] === "index.md") {
            return -1;
          } else if (b[1] === "index.md") {
            return 1;
          } else {
            return a[1] > b[1] ? 1 : a[1] === b[1] ? 0 : -1;
          }
        })
        // update toc for all new or modified files
        .forEach(([path, name, mtime]) => {
          const content = readFileSync(path).toString();
          const frontmatter = FrontmatterRegex.exec(content);

          if (frontmatter !== null) {
            const frontmatterTitle = TitleRegex.exec(frontmatter.groups.frontmatter);

            if (frontmatterTitle !== null && frontmatterTitle.groups.title === title) {
              toc[title][name] = {
                headings: collectSluggedHeadings(content),
                mtime,
                path: routeMapper(path)
              };
            }
          }

          modifiedCounter++;
        });

      // remove all unused keys (all keys remaining in `keys`)
      keys.forEach((key) => {
        delete toc[title][key];
        modifiedCounter++;
      });
      // if any files were modified, save in cache
      if (modifiedCounter !== 0) {
        writeFileSync(TocFile, JSON.stringify(toc));
      }
    }
  };
}

export { tocPlugin, routeMapper, TitleRegex, FrontmatterRegex };

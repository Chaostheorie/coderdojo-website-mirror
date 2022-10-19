import { defineMDSveXConfig as defineConfig } from "mdsvex";
import { parse as load } from "@iarna/toml";
import { escapePlugin } from "./src/lib/escape.js";
import { tocPlugin } from "./src/lib/toc.js";
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from "remark-math";
import remarkAdmonitions from "remark-admonitions";
import remarkSlug from "remark-slug";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { highlight } from "./src/lib/codetitle.js";

const config = defineConfig({
  extensions: [".svelte.md", ".md"],
  layout: {
    _: "./src/lib/mdsvex.layout.svelte"
  },
  smartypants: {
    dashes: "oldschool",
    backticks: true,
    ellipses: true
  },
  frontmatter: {
    marker: "+",
    type: "toml",
    parse(frontmatter, messages) {
      try {
        return { ...load(frontmatter) };
      } catch (e) {
        messages.push(e.message);
      }
    }
  },
  highlight: { highlighter: highlight, alias: { py: "python" } },
  remarkPlugins: [escapePlugin, remarkMath, remarkSlug, remarkAdmonitions, tocPlugin, remarkGfm],
  rehypePlugins: [rehypeKatexSvelte, rehypeAutolinkHeadings]
});

export default config;
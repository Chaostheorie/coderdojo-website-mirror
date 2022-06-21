import { cwd } from "node:process";
import { readdirSync, readFileSync, statSync } from "fs";
import { join as joinPath } from "path";
import { routeMapper, TitleRegex, FrontmatterRegex } from "$lib/toc.js";

const DescriptionRegex = new RegExp(/^(description|summary) *= *["'](?<description>.+)['"] *$/m);
const DateRegex = new RegExp(/^date *= *(?<date>[0-9]{2,4}-[0-9]{2}-[0-9]{2}) *$/m);

export async function get() {
  // collection of news interface
  let news = [];

  // retrieve metadata about kyus and provide enriched kyu data for kyus.svelte
  const newsDir = joinPath(cwd(), "src/routes/posts/news/");

  readdirSync(newsDir, { encoding: "utf-8" })
    .filter((file) => file.endsWith(".md"))
    .map((file: string) => {
      const path = joinPath(newsDir, file);
      const content = readFileSync(path).toString();
      const frontmatter = FrontmatterRegex.exec(content);

      // extract title, date and description for each article in /news/
      if (frontmatter !== null) {
        const frontmatterTitle = TitleRegex.exec(frontmatter.groups.frontmatter);

        if (frontmatterTitle !== null) {
          // try to extract date and otherwise fallback to mtime
          const dateMatch = DateRegex.exec(frontmatter.groups.frontmatter);
          let date: string;

          if (dateMatch !== null && dateMatch.groups.date !== null) {
            date = dateMatch.groups.date;
          } else {
            const mtime = statSync(path).mtime;

            date = `${mtime.getFullYear()}-${mtime.getMonth()}-${mtime.getDate()}`;
          }

          const descriptionMatch = DescriptionRegex.exec(frontmatter.groups.frontmatter);

          news.push([
            routeMapper(path),
            frontmatterTitle.groups.title,
            date,
            descriptionMatch !== null
              ? descriptionMatch.groups.description
              : "A description/ summary is missing"
          ]);
        }
      }
    });

  // sort by date
  news = news.sort((a, b) => (a[2] > b[2] ? -1 : a[2] === b[2] ? 0 : 1));

  return {
    body: news
  };
}

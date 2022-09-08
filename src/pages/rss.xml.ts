import rss from "@astrojs/rss";
import { default_title, default_description } from "$lib/constants";

export const get = () =>
  rss({
    title: default_title,
    description: default_description,
    site: import.meta.env.SITE,
    items: import.meta
      .glob('./**/*.mdx'),
    customData: `<language>de-de</language>`,
  });

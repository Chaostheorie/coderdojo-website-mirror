import rss from "@astrojs/rss";
import { default_title, base_description } from "$lib/constants";

export const get = () =>
  rss({
    title: default_title,
    description: base_description,
    site: import.meta.env.SITE,
    items: import.meta.glob("./**/*.mdx"),
    customData: `<language>de-de</language>`,
  });

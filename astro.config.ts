import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/lib/config";
import remarkMath from "remark-math";
import { admonitionPlugin } from "./src/lib/admonition.js";
import { codetitlePlugin } from "./src/lib/prism.js";
import remarkSlug from "remark-slug";
import remarkDirectives from "remark-directive";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkSmartpants from "remark-smartypants";
import rehypeKatex from "rehype-katex";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // passthrough domain for current build target
  site: SITE.domain,
  // all the sweet integrations
  integrations: [
    tailwind(),
    svelte(),
    sitemap(),
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkSmartpants,
        remarkGfm,
        remarkDirectives,
        admonitionPlugin,
        codetitlePlugin,
        remarkMath,
        remarkSlug,
      ],
      rehypePlugins: [rehypeKatex, rehypeAutolinkHeadings],
    }),
  ],
  // disable highlighting because we want to take of this ourselves
  markdown: {
    syntaxHighlight: false,
  },
  // we need static output
  output: "static",
});

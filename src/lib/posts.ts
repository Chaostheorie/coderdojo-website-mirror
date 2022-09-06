import getReadingTime from "reading-time";
import glob from "fast-glob";

export const extractFrontMatter = async (post) => {
  const { frontmatter, compiledContent, rawContent, file } = post;

  // Handle optional attributes
  const authors =
    frontmatter.authors !== undefined
      ? frontmatter.authors
      : "DerMicha & Bengoshi";
  // TODO: Migrate description
  const description =
    frontmatter.description !== undefined ? frontmatter.description : "";
  // TODO: Add default social image
  const image =
    frontmatter.image !== undefined ? frontmatter.image : "favicon.ico";
  // TODO: Find a way to retrieve this from the file
  const pubDate = new Date();

  return {
    pubDate: pubDate,
    title: frontmatter.title,
    description: description,
    body: compiledContent(),
    image: image,
    authors: authors,
    slug: file.split("/").pop().split(".").shift(),
    readingTime: Math.ceil(getReadingTime(rawContent()).minutes),
  };
};

const load = async function () {
  const posts = glob("../data/posts/**/*.{md,mdx}", {});

  const normalizedPosts = Object.keys(posts).map(async (key) => {
    const post = await posts[key];
    return await extractFrontMatter(post);
  });

  const results = (await Promise.all(normalizedPosts)).sort(
    (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
  );

  return results;
};

// local cache for posts to avoid reloading for each post
let _posts;

export const getPosts = async () => {
  _posts = _posts || load();

  return await _posts;
};

export const findImage = async (imageRoute) => {
  const images = glob("../assets/images/*");

  const key = imageRoute.replace("~/", "../");

  const image =
    typeof imageRoute === "string" &&
    (imageRoute.startsWith("/") ||
      imageRoute.startsWith("http://") ||
      imageRoute.startsWith("https://"))
      ? imageRoute
      : typeof images[key] === "function"
      ? (await images[key]())["default"]
      : null;

  return image;
};

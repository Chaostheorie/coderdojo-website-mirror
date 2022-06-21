import { Feed } from "feed";

/**
 * Fetch all frontmatter data from markdown files recursively
 * (currently uncached since it only needs to be build once)
 * @param {string} _post
 * @return {[string, string, string][]}
 */
function collectPosts(_post) {
  // TODO: implement post collection and return type struct
  return [];
}

/**
 * Support for atom and rss feeds using the feed library
 * (currently uncached since it only needs to be build once)
 * @param {"atom" | "rss"} type
 * @return {string}
 */
function generateFeed(type) {
  // initialize feed object
  const feed = new Feed({
    title: "Coderdojo R & B",
    link: "https://coderdojo.red",
    description:
      "Willkommen beim CoderDōjō für Jugendliche! Wir sitzen zwar in Berlin, aber da bei uns vieles online stattfindet, kannst Du bei uns an vielem auch teilnehmen, wenn Du hier nicht wohnst. Wir wollen gemeinsam mit Dir die rote Pille nehmen und das Wunderland entdecken."
  });

  return type === "atom" ? feed.atom1() : feed.rss2();
}

export { generateFeed };

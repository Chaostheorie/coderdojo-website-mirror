import { Feed } from 'feed';
import { readdirSync, readFileSync } from 'fs';

/**
 * Fetch all frontmatter data from markdown files recursively
 * (currently uncached since it only needs to be build once)
 * @param {string} path
 * @return {DATA}
 */
function collectPosts(post) {
	// TODO: implement post collection and return type struct
}

/**
 * Support for atom and rss feeds using the feed library
 * (currently uncached since it only needs to be build once)
 * @param {"atom" | "rss"} type
 * @return {string}
 */
function generateFeed(type) {
	// initialize feed object
	const feed = new Feed();

	// todo: implement bind to recursively collect posts and create feeds

	return type === 'atom' ? feed.atom1() : feed.rss2();
}

export { generateFeed };

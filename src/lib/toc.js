/** @typedef {import('remark-math')} */

import { readFileSync, writeFileSync } from 'fs';
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';

const TocFile = './src/.toc-cache.json';

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
function tocPlugin() {
	return (tree) => {
		if (tree.children[0].type === 'toml') {
			// extract title from toml (title = '<this part>')
			let title = tree.children[0].value.match(/title = ['"](?<title>[^\n]+)['"]/);

			if (title !== null) {
				// loc toc or create if not found
				let toc;
				try {
					toc = JSON.parse(readFileSync(TocFile));
				} catch (e) {
					toc = {};
				}

				let headlines = [];

				visit(tree, (node) => {
					if (node.type === 'heading') {
						headlines.push([toString(node), node.data.id + '-section']);
					}
				});

				if (headlines.length > 1) {
					toc[title.groups['title']] = headlines;
					writeFileSync(TocFile, JSON.stringify(toc));
				}
			}
		}
	};
}

export { tocPlugin };

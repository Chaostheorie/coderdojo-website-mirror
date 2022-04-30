/** @typedef {import('remark-math')} */

import { visit } from 'unist-util-visit';

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
function myRemarkPlugin() {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type === 'heading') {
				// console.log(Object.keys(tree), tree.children[0]);
			}
		});
	};
}

export { myRemarkPlugin };

import { visit } from "unist-util-visit";

/**
 * Escape html tags in markdown text nodes
 * @type {import('unified').Plugin<[], import('mdast').Root>}
 * @param {Root} fn
 */
function escapePlugin(fn) {
  fn = fn || function () {};

  return (tree) => {
    visit(tree, "text", (node) => {
      node.value = node.value.replace(/>/g, "&gt;").replace(/</g, "&lt;");
    });
  };
}

export { escapePlugin };

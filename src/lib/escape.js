import { visit } from "unist-util-visit";

/**
 * Escape html tags in markdown text nodes
 * @type {import('unified').Plugin<[], import('mdast').Root>}
 */
function escapePlugin() {
  return (tree) => {
    visit(tree, "text", (node) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      node.value = node.value.replace(/>/g, "&gt;").replace(/</g, "&lt;");
    });
  };
}

export { escapePlugin };

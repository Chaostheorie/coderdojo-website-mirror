import { visit } from "unist-util-visit";
import { h } from "hastscript";

const acceptableCalloutTypes = {
  tip: { cssClass: "admonition-tip", iconClass: "info", text: "Tip" },
  info: {
    cssClass: "admonition-important",
    iconClass: "info",
    text: "Hinweis",
  },
  hint: {
    cssClass: "admonition-hint",
    iconClass: "info",
    text: "Lösungshinweis",
  },
  warning: {
    cssClass: "admonition-warning",
    iconClass: "warning",
    text: "Achtung!",
  },
  danger: {
    cssClass: "admonition-caution",
    iconClass: "warning-octagon",
    text: "Achtung!",
  },
};

// h with support for property -> data passthrough
const mH = (selector, data, ...children) => {
  const element = h(selector, children);
  element.data = data || {};

  return element;
};

/**
 * Plugin to generate admonition blocks.
 * Based on https://github.com/elviswolcott/remark-admonitions/issues/49#issuecomment-1193909728
 * @type {import('unified').Plugin<[], import('mdast').Root>}
 */
export function admonitionPlugin() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === "containerDirective") {
        // determine name or default to tip
        const name = !Object.keys(acceptableCalloutTypes).includes(node.name)
          ? "tip"
          : node.name;

        const admonitionInfo = acceptableCalloutTypes[name];

        // Creating the icon.
        const icon = mH("i", {
          hName: "i",
          hProperties: { class: [`bi-${admonitionInfo.iconClass}`] },
        });

        // Creating the icon's column.
        const iconWrapper = mH(
          "div",
          {
            hProperties: { class: ["flex", "items-center", "gap-2"] },
          },
          [icon, h("span", admonitionInfo.text)]
        );

        // Creating the wrapper for the callout's content.
        const contentWrapper = mH("div", {
          hProperties: {
            class: ["admonition", admonitionInfo.cssClass],
          },
        });

        // support for hidden hints
        if (name === "hint") {
          const admonitionMarker = h("span", "Hinweis genutzt");
          admonitionMarker.data = {
            hProperties: { class: ["hidden", "ml-auto"] },
          };
          iconWrapper.children.push(admonitionMarker);

          contentWrapper.children = [
            iconWrapper,
            mH(
              "div",
              {
                hProperties: {
                  class: ["admonition-hint-section"],
                  style: "height: 0px;",
                },
              },
              node.children
            ),
          ];
        } else {
          contentWrapper.children = [iconWrapper, ...node.children];
        }

        node.children = [contentWrapper];
      }
    });
  };
}

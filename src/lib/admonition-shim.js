import { visit } from "unist-util-visit";
import { h } from "hastscript";

const acceptableCalloutTypes = {
  tip: { cssClass: "admonition-tip", iconClass: "info", text: "Tip" },
  info: {
    cssClass: "admonition-important",
    iconClass: "info",
    text: "Hinweis",
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
        const icon = h("i");
        const iconData = icon.data || (icon.data = {});
        iconData.hName = "i";
        iconData.hProperties = h("i", {
          class: `ph-${admonitionInfo.iconClass}`,
        }).properties;

        // Creating the icon's column.
        const iconWrapper = h("div");
        const iconWrapperData = iconWrapper.data || (iconWrapper.data = {});
        iconWrapperData.hName = "div";
        iconWrapperData.hProperties = h("div", {
          class: "flex items-center gap-2",
        }).properties;
        iconWrapper.children = [icon, h("span", admonitionInfo.text)];

        // Creating the wrapper for the callout's content.
        const contentWrapper = h("div");
        const wrapperData = contentWrapper.data || (contentWrapper.data = {});
        wrapperData.hName = "div";
        wrapperData.hProperties = h("div", {
          class: `admonition ${admonitionInfo.cssClass}`,
        }).properties;
        contentWrapper.children = [iconWrapper, ...node.children];
        node.children = [contentWrapper];
      }
    });
  };
}

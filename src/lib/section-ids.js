// ES Port of rehype-sectionize by Jake Low modified to support headings with slugs
// repositor: https://github.com/agentofuser/rehype-section
// Original license: Copyright (c) 2019 Jake Low

import { findAfter } from "unist-util-find-after";
import { visitParents } from "unist-util-visit-parents";

const heading_regex = /h([1-3])/;

function sectionPlugin() {
  return transform;
}

function transform(tree) {
  visitParents(
    tree,
    (node) => node.type === "element" && heading_regex.test(node.tagName),
    sectionize
  );
}

function sectionize(node, ancestors) {
  const start = node;
  const depth = Number.parseInt(start.tagName[1]);
  const parent = ancestors[ancestors.length - 1];

  // consume all nodes until either an ending of same or higher depth is found or mdsvex's Layout is finished
  const isEnd = (node) => {
    let lower;
    if (node.type === "element") {
      let results = node.tagName.match(heading_regex);

      if (results !== null) {
        lower = depth >= Number.parseInt(results[1]);
      } else {
        lower = false;
      }
    }

    return (
      (node.type === "raw" &&
        node.value.startsWith("</Layout_MDSVEX_DEFAULT>")) ||
      lower
    );
  };
  const end = findAfter(parent, start, isEnd);

  const startIndex = parent.children.indexOf(start);
  const endIndex = parent.children.indexOf(end);

  const between = parent.children.slice(
    startIndex,
    endIndex > 0 ? endIndex : undefined
  );

  const section = {
    type: "element",
    tagName: "section",
    depth,
    children: between,
    properties:
      start.properties !== undefined && start.properties.id !== undefined
        ? {
            id: start.properties.id + "-section",
            "data-type": "scrollspy-tracked",
          }
        : {},
  };

  parent.children.splice(startIndex, section.children.length, section);
}

export { sectionPlugin };

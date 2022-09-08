// unist and hast utils
import { visit } from "unist-util-visit";
import { h } from "hastscript";
import { fromHtml } from "hast-util-from-html";

// for syntax highlighting
import Prism from "prismjs";
import loadLanguages from "prismjs/components/index.js";

// svg icons
import { copy_phosphor_icon, play_phosphor_icon } from "./icons.js";

// languages for prism
const LANGUAGES = [
  "python",
  "json",
  "yaml",
  "html",
  "javascript",
  "c",
  "rust",
  "bash",
];

loadLanguages(LANGUAGES);

/**
 * Capitalize string
 * @param {string} str
 * @return {string}
 */
function title(str) {
  return str[0].toUpperCase() + str.substr(1);
}

// partition string at first occurence of ":"
function partitionLanguage(language) {
  const parts = language.split(":");

  return [parts[0], parts.splice(1).join(":")];
}

export function codetitlePlugin() {
  return (tree) =>
    visit(tree, "code", (node) => {
      // check if lang is defined.
      // if lang defined, check if filename is specified
      // and check if lang is a supported language
      const code_lang =
        node.lang !== undefined
          ? /[a-z]+:.+/.test(node.lang)
            ? partitionLanguage(node.lang)
            : LANGUAGES.includes(node.lang)
              ? [node.lang, `${node.lang} code`]
              : ["", "plain text"]
          : ["", "plain text"];

      const code =
        node.value ||
        children
          .filter(({ type }) => type === "text")
          .map(({ value }) => value)
          .pop();

      // random id
      const id = Date.now() + Math.floor(Math.random() * 10);

      const prefix = `<div class="codetitle" id="${id}" data-code="${encodeURIComponent(
        code
      )}">
		<span>${title(code_lang[1])}</span>
		<span class='codetitle-btn-group'>
		  <button class="codetitle-btn" type="button" onclick="window.copy_to_clipboard('${id}', this)">
			<span class="sr-only">Copy Code to Clipboard</span> ${copy_phosphor_icon}
		  </button>
		  ${code_lang[0] === "python"
          ? `<button class="codetitle-btn hidden" type="button" onclick="window.run_playground('${id}', this)" data-title="${encodeURIComponent(
            code_lang[1]
          )}"><div class="sr-only">Execute Code in Playground</div>${play_phosphor_icon}</button>`
          : ""
        }
		</span>
		</div>`;

      // quick'n'dirty node modifiation
      // TODO: Make this more stable with hast
      node.type = "html";
      node.children = undefined;
      if (code_lang[0] !== "") {
        node.value = `<div class="codewrapper">${prefix}<pre class="lang-${code_lang[0]
          }">${Prism.highlight(
            code,
            Prism.languages[code_lang[0].toLowerCase()],
            code_lang[0].toLowerCase()
          )}</pre></div>`;
      } else {
        node.value = `<div class="codewrapper">${prefix}<pre><code>${code}</code></pre></div>`;
      }
    });
}

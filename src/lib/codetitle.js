// Support for code titles and (TBD) code linking

// for syntax highlighting
import Prism from "prismjs";
import loadLanguages from "prismjs/components/index.js";

// svg icons
import { copy_phosphor_icon, play_phosphor_icon } from "./icons.js";

loadLanguages(["python", "json", "yaml", "html", "javascript", "c", "rust", "bash"]);

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

/**
 * Hightlight code blocks with Prism.js and optional header support
 * Source code blocks may have an associated filename as part of the language name (syntax: lang[:filename])
 * @param {string} code
 * @param {string} lang
 * @return {string}
 */
function highlight(code, lang) {
  // check if lang is defined. if lang defined, check if filename is specified
  const code_lang =
    lang !== null
      ? /[a-z]+:.+/.test(lang)
        ? partitionLanguage(lang)
        : [lang, `${lang} code`]
      : ["", "plain text"];

  // random id
  const id = Date.now() + Math.floor(Math.random() * 10);

  const prefix = `<div class="codetitle" id="${id}" data-code="${encodeURIComponent(code)}">
		<span>${title(code_lang[1])}</span>
		<span class='codetitle-btn-group'>
		  <button class="codetitle-btn" type="button" onclick="window.copy_to_clipboard('${id}', this)">
			<span class="sr-only">Copy Code to Clipboard</span> ${copy_phosphor_icon}
		  </button>
		  ${
        code_lang[0] === "python"
          ? `<button class="codetitle-btn" type="button" onclick="window.run_playground('${id}', this)" data-title="${encodeURIComponent(
              code_lang[1]
            )}"><div class="sr-only">Execute Code in Playground</div>${play_phosphor_icon}</button>`
          : ""
      }
		</span>
		</div>`;

  let result;
  if (code_lang[0] !== "") {
    result = `<div class="codewrapper">${prefix}<pre class="lang-${code_lang[0]}">${Prism.highlight(
      code,
      Prism.languages[code_lang[0].toLowerCase()],
      code_lang[0].toLowerCase()
    )}</pre></div>`;
  } else {
    result = `<div class="codewrapper">${prefix}<pre><code>${code}</code></pre></div>`;
  }

  return result.replace(/{/g, "&#123;").replace(/}/g, "&#125;");
}

export { highlight };

import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { parse as load } from '@iarna/toml';
import loadLanguages from 'prismjs/components/index.js';
import Prism from 'prismjs';
import { myRemarkPlugin } from './src/lib/toc.js';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkMath from 'remark-math';
import remarkSlug from 'remark-slug';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import { copy_phosphor_icon, play_phosphor_icon } from './src/lib/codetitle.js';

loadLanguages(['python', 'json', 'yaml', 'html', 'javascript', 'c', 'rust']);

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: './src/lib/mdsvex.layout.svelte',
	smartypants: {
		dashes: 'oldschool',
		backticks: true,
		ellipses: true
	},
	frontmatter: {
		marker: '+',
		type: 'toml',
		parse(frontmatter, messages) {
			try {
				let fm = load(frontmatter);
				return { fm: frontmatter, ...fm };
			} catch (e) {
				messages.push(e.message);
			}
		}
	},
	highlight: {
		highlighter(code, lang) {
			// chech if lang is defined. if lang defined, check if filename is specified
			// syntax: lang[:filename] -> [lang, filename]

			let code_lang =
				lang !== null
					? /[a-z]+:.+/.test(lang)
						? lang.split(':').slice(0, 2)
						: [lang, `${lang} code`]
					: ['', 'plain text'];

			let prefix = `<div class="codetitle">
			<span>${code_lang[1]}</span>
			<span class='codetitle-btn-group'>
			  <button class="codetitle-btn" type="button" onclick="window.copy_to_clipboard('code')">
			  ${copy_phosphor_icon}
			  </button>
			  ${
					code_lang[0] === 'python'
						? `<button class="codetitle-btn" type="button" onclick="window.run_playground('code')">${play_phosphor_icon}</button>`
						: ''
				}
		    </span>
		    </div>`;

			if (code_lang[0] !== '') {
				return `${prefix}<pre class="lang-${code_lang[0]}">${Prism.highlight(
					code,
					Prism.languages[code_lang[0]],
					code_lang[0]
				)}</pre>`;
			} else {
				return `${prefix}<pre><code>${code}</code></pre>`;
			}
		}
	},

	remarkPlugins: [remarkMath, remarkSlug, myRemarkPlugin, remarkGfm, remarkEmoji],
	rehypePlugins: [rehypeKatexSvelte]
});

export default config;

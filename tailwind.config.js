const YAML = require('yaml');
const fs = require('fs');

let red_domains;

if (fs.existsSync('_config.yml')) {
    const config = YAML.parse(fs.readFileSync('_config.yml', 'utf8'));

    red_domains = config['theme_config']['domains'].filter((domain_list) => Object.keys(domain_list)[0] === 'red')[0][
        'red'
    ];
} else {
    red_domains = ['coderdojo.red'];
}

console.info(`Assuming coderdojo.red domains are ${red_domains} for building CSS files`);

module.exports = {
    content: ['themes/v2/**/*.ejs', 'content/{**/*, *}.{md, html}'],
    theme: {
        extend: {
            colors: {
                theme: red_domains.indexOf(process.env.DOMAIN) !== -1 ? '#d01110' : '#1f4865',
            },
        },
        fontFamily: {
            mono: [
                'JetBrains mono',
                'ui-monospace',
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                'Liberation Mono',
                'Courier New',
                'monospace',
            ],
            sans: [
                'Fira Sans',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji',
            ],
        },
    },
    plugins: [],
};

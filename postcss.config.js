const is_prod = () => {
    return process.env.PRODUCTION !== undefined;
};

console.log(`Purging: ${is_prod()}`);

module.exports = {
    plugins: [
        require('postcss-import')(),
        require('tailwindcss/nesting')(),
        require('tailwindcss')(),
        require('autoprefixer')(),
        require('postcss-font-magician')(),
        require('postcss-viewport-height-correction'),
        require('postcss-pxtorem')(),
        is_prod()
            ? require('@fullhuman/postcss-purgecss')({
                  content: ['public/**/*.html', 'public/*.html', 'themes/v2/**/*.ejs', 'content/{**/*, *}.{md, html}'],
                  css: ['public/css/index.css'],
                  safelist: ['bi-clipboard-check', /shk./, 'toggled', /tw./, /md./, /xl./, /lg./, /sm./],
                  fontFace: true,
                  keyframes: true,
              })
            : null,
        require('postcss-svgo'),
        require('cssnano')({
            preset: 'advanced',
        }),
    ],
};

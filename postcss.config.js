module.exports = {
    plugins: [
        require('postcss-import')(),
        require('tailwindcss/nesting')(),
        require('tailwindcss')(),
        require('autoprefixer')(),
        require('postcss-font-magician')(),
        require('postcss-viewport-height-correction'),
        require('postcss-pxtorem')(),
        process.env.PRODUCTION
            ? require('@fullhuman/postcss-purgecss')({
                  content: ['public/**/*.html', 'public/*.html', 'themes/v2/**/*.ejs', 'content/{**/*, *}.{md, html}'],
                  css: ['public/main.css'],
                  safelist: ['bi-clipboard-check', /shk./],
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

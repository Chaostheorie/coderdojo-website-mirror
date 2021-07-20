module.exports = {
    plugins: [
        require('autoprefixer')(),
        require('postcss-font-magician')(),
        require('postcss-viewport-height-correction'),
        require('postcss-pxtorem')(),
        require('@fullhuman/postcss-purgecss')({
            content: ['public/**/*.html', 'public/*.html'],
            css: ['public/main.css'],
            safelist: [
                'toggled',
                'sidebar-toggled',
                'show',
                'collapse',
                'collapsing',
                'bi-clipboard-check',
            ],
            fontFace: true,
            keyframes: true,
        }),
        require('postcss-purgefonts')({
            to: 'public/fonts/',
            purge_only_fonts: ['bootstrap-icons'],
            ignore_urls: false,
        }),
        require('cssnano')({
            preset: 'advanced',
        }),
    ],
};

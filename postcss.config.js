module.exports = {
    plugins: [
        require('autoprefixer')(),
        require('postcss-font-magician')(),
        require('postcss-viewport-height-correction'),
        require('postcss-pxtorem')(),
        require('cssnano')({
            preset: 'advanced',
        }),
    ],
};

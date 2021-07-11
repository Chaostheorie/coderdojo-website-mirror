const path = require('path');
const dist = path.resolve(__dirname, './static/js/');
const webpack = require('webpack');

const banner = new webpack.BannerPlugin({
    banner: `
    coderdojo.cobalt.rocks ([name]) - Under GPL-3.0-only @ Cobalt <chaosthe0rie@pm.me> - See https://coderdojo.cobalt.rocks/content/copyright/ for attributions
    chunkhash:[chunkhash], filebase:[base], file:[file]
    `,
});

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: {
        main: './ts/main.ts',
    },
    plugins: [banner],
    output: {
        path: dist,
        publicPath: '/js/',
        filename: '[name].js',
    },
};

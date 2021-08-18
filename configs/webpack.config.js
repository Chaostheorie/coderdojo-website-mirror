const path = require('path');
const dist = path.resolve(__dirname, '../static/js/');
const webpack = require('webpack');

const banner = new webpack.BannerPlugin({
    banner: `
    coderdojo red and blue assets ([name]) - Under GPL-3.0-only @ Cobalt <c0balt@disroot.org> - See https://coderdojo.red/content/copyright/ for attributions
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
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            context: path.resolve(__dirname, '..'),
                            configFile: path.resolve(
                                __dirname,
                                './tsconfig.webpack.json',
                            ),
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: {
        main: path.resolve(__dirname, '../ts/main.ts'),
    },
    plugins: [banner],
    output: {
        path: dist,
        publicPath: '/js/',
        filename: '[name].js',
    },
};

console.log(path.resolve(__dirname, '../ts/main.ts'));

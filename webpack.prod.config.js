const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    keep_fnames: true,
                },
            }),
        ],
        removeEmptyChunks: false,
        sideEffects: true,
        mergeDuplicateChunks: true,
        nodeEnv: 'production',
    },
});

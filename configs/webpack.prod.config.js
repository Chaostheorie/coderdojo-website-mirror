const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        moduleIds: 'deterministic',
        removeAvailableModules: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                parallel: true,
                terserOptions: {
                    mangle: true,
                    sourceMap: {},
                    keep_fnames: true,
                },
            }),
        ],
        removeEmptyChunks: false,
        sideEffects: true,
        flagIncludedChunks: true,
        concatenateModules: true,
        mergeDuplicateChunks: true,
        nodeEnv: 'production',
    },
});

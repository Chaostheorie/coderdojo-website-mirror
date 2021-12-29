import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'themes/v2/source/js/helper.js',
    output: {
        file: 'themes/v2/source/js/bundle.js',
        format: 'iife',
    },
    plugins: [
        nodeResolve({
            exportConditions: ['node'],
        }),
        commonjs(),
        terser(),
    ],
};

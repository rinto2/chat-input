import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import pkg from './package.json'

export default {
    input: './src/index.ts',
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            exclude: 'node_modules/**',
            typescript: require("typescript")
        }),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    output: [
        {
            format: 'cjs',
            file: pkg.main
        },
        {
            format: 'esm',
            file: pkg.module
        },
        {
            format: 'umd',
            name: 'chatInput',
            file: pkg.browser
        }
    ] 
}
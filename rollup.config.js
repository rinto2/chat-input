import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

export default {
    input: './src/index.ts',
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            exclude: "node_modules/**",
            typescript: require("typescript")
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
            name: 'chat-input',
            file: pkg.browser
        }
    ] 
}
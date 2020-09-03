const { resolve } = require("path");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const replace = require("@rollup/plugin-replace");
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
import copy from 'rollup-plugin-copy';


const production = !process.env.ROLLUP_WATCH;
const outputPath = `dist`

export default {
  input: resolve(process.cwd(), `src/timelines.js`),
  output: {
    dir: resolve(process.cwd(), outputPath),
    format: "iife",
    name: null,
    sourcemap: true,
  },
  plugins: [
    copy({
      targets: [
        { src: 'public/index.html', dest: outputPath },
      ]
    }),
    nodeResolve({
      browser: true,
    }),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
    }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    postcss({
      modules: true,
      plugins: [],
    }),
    !production &&
    serve({
      contentBase: [`${outputPath}`],
      port: 10023,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }),
    !production && livereload(outputPath),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

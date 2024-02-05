import babel from 'rollup-plugin-babel';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
//import { createRequire } from 'node:module';
//const requireFile = createRequire(import.meta.url);
//const packageJson = requireFile('./package.json');

export default [{
  input: "src/index.js",
  output: [
    {
      file: 'dist/index.js',
      format: "cjs",
      sourcemap: true
    },
    {
      file: 'dist/index.es.js',
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    peerDepsExternal(),
    resolve({extensions: ['.js', '.jsx']}),
    commonjs(),
    postcss({
      extensions: ['.css']
    })
  ]
}];
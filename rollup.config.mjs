import babel from '@rollup/plugin-babel';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import terser from '@rollup/plugin-terser';

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
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled'
    }),
    peerDepsExternal(),
    resolve({extensions: ['.js', '.jsx']}),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
      extensions: ['.css']
    }),
    terser()
  ]
}];
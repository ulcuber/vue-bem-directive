import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';

import pkg from './package.json';

const plugins = targets => ([
  flow(),
  babel({
    exclude: 'node_modules/**',
    babelrc: false,
    presets: [['@babel/preset-env', { modules: false, targets }]],
    plugins: ['babel-plugin-transform-object-rest-spread'],
    comments: false,
  }),
]);

const output = (format, file) => ({
  file,
  format,
  name: 'VueBemDirective',
});

export default [
  {
    input: 'src/main.js',
    output: [
      output('umd', pkg.browser),
    ],
    plugins: plugins({ chrome: '58', ie: '10' }).concat([
      resolve(),
      commonjs(),
    ]),
  },
  {
    input: 'src/main.js',
    output: [
      output('cjs', pkg.main),
    ],
    plugins: plugins({ node: '6' }),
  },
  {
    input: 'src/main.js',
    output: [
      output('es', pkg.module),
    ],
    plugins: plugins({ node: '8' }),
  },
];

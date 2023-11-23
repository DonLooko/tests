const replace = require('@rollup/plugin-replace');
const commonjs = require('@rollup/plugin-commonjs');
const copy = require('rollup-plugin-copy');

const MODULE_NAME = 'ContactPickerApp';

module.exports = require('@pdffiller/dev-tools/rollup-config/create')({
  input: './src/index.ts',
  plugins: [
    copy({
      targets: [
        {
          src: 'build/index.d.ts',
          dest: 'dist/',
        },
      ],
    }),
    commonjs({
      exclude: 'src/ui/**',
    }),
    replace({
      preventAssignment: true,
      values: {
        'process.env.MODULE_NAME': `'${MODULE_NAME}'`,
      },
    }),
  ],
});

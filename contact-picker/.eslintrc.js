module.exports = {
  extends: ['pdffiller-typescript', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'jest'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/indent': 0,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 0,
      },
    },
  ],
};

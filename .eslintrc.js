module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-airbnb',
    'plugin:react/jsx-runtime',
    'plugin:i18next/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  root: true,

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: ['arrow-function', 'function-expression'],
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.tsx', '.jsx', '.js'] },
    ],
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'no-underscore-dangle': 'off',
    'import/no-import-module-exports': 'off',
    'no-param-reassign': 'off',
    'max-len': [2, { ignoreComments: true, ignoreUrls: true, code: 100 }],
    '@typescript-eslint/no-var-requires': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { enums: false }],
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to'],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
}

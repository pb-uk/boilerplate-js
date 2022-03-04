// .eslintrc.cjs

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
  overrides: [
    {
      files: ['**/*.{test,spec}.{c,m,}js'],
      env: { jest: true },
      extends: ['plugin:mocha/recommended'],
    },
  ],
};

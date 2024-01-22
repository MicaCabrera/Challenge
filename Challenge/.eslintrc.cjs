module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', "simple-import-sort"],
  rules: {
    'react-refresh/only-export-components':'warn',
      'prettier/prettier':['warn', { endOfLine: 'auto' }],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "react/prop-types":"off"
  },
}

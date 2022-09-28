module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
    // 'prettier:prettier/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    indent: [
      'error',
      2
    ],
    'linebreak-style': 0,
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ],
    'react/prop-types': 'off'
  }
}

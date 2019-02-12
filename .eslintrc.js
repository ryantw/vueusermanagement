module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-mixed-operators': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

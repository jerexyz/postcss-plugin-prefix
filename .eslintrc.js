module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint-config-postcss'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': 0,
  },
}

module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-unused-vars': 'warn',
    'comma-dangle': 'off',
    semi: [2, 'always'],
  },
};

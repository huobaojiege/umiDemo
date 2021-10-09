/*
 * @Author: your name
 * @Date: 2021-09-28 09:15:40
 * @LastEditTime: 2021-10-09 10:20:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\.eslintrc.js
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // 禁止使用 var
    'no-var': 'error',
    // 优先使用 interface 而不是 type
    // '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    'comma-dangle': [2, 'never'],
    'object-curly-spacing': [2, 'never'],
    'object-shorthand': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'max-len': [
      2,
      120,
      {
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'consistent-return': 0,

    'prefer-destructuring': [
      2,
      { array: false, object: false },
      { enforceForRenamedProperties: false },
    ],
    'prefer-object-spread': 0, // until node 8 is required
    'prefer-rest-params': 0, // until node 6 is required
    'prefer-spread': 0, // until node 6 is required
    'function-paren-newline': 0,
    'no-plusplus': 1,
    'no-param-reassign': 1,
    'no-restricted-syntax': [
      2,
      {
        selector: 'ObjectPattern',
        message: 'Object destructuring is not compatible with Node v4',
      },
    ],
    strict: [2, 'safe'],
    'valid-jsdoc': [
      2,
      {
        requireReturn: false,
        requireParamDescription: false,
        requireReturnDescription: false,
      },
    ],
  },
};

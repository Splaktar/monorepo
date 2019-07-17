module.exports = {
  plugins: ['verdaccio', '@typescript-eslint', 'jest'],

  extends: [
    'eslint:recommended',
    'google',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:verdaccio/recommended',
    'plugin:@typescript-eslint/recommended'
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 7,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    }
  },

  env: {
    node: true,
    es6: true,
    jest: true
  },

  globals: {
    __APP_VERSION__: true
  },

  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-member-accessibility': ['warn'],
    'no-tabs': 0,
    'keyword-spacing': 0,
    'padded-blocks': 0,
    'no-useless-escape': 0,
    'handle-callback-err': 2,
    'no-debugger': 2,
    'no-fallthrough': 2,
    curly: 2,
    'eol-last': 1,
    'no-irregular-whitespace': 1,
    'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
    'no-trailing-spaces': 1,
    'no-new-require': 2,
    'no-undef': 2,
    'no-unreachable': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'max-len': [1, 160],
    semi: [2, 'always'],
    camelcase: 0,
    'require-jsdoc': 0,
    'valid-jsdoc': 0,
    'prefer-spread': 1,
    'prefer-rest-params': 1,
    'no-var': 2,
    'no-constant-condition': 2,
    'no-empty': 2,
    'guard-for-in': 2,
    'no-invalid-this': 2,
    'new-cap': 2,
    'one-var': 2,
    'no-console': [
      2,
      {
        allow: ['warn']
      }
    ]
  }
};

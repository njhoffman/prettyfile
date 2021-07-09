module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  "globals" : {
    "proxyquire":   false,
    "expect":       false,
    "request":      false,
    "should":       false,
    "sinon":        false,
    "jest":         false
  },

  parser: 'babel-eslint',
  extends: ['eslint-config-airbnb', 'plugin:prettier/recommended'],
  plugins: ['babel', 'unused-imports', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  rules: {
    'prettier/prettier': 0,
    'import/no-extraneous-dependencies': [
      'warn',
      { devDependencies: ['**/*.test.js', '**/*.spec.js'] }
    ],
    'global-require': 'off',
    'import/no-unresolved': 1,
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-constant-condition': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': 'warn'
  }
};

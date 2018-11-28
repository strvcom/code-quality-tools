/**
 * strvcom/eslint-config-react
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  extends: ['@strv/eslint-config-base'],
  root: true,

  parser: 'babel-eslint',

  plugins: ['react', 'jsx-a11y'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
    'react/boolean-prop-naming': [
      'warn',
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message:
          'Boolean prop: ({{ propName }}) should start with is/has - pattern: ({{ pattern }})',
      },
    ],
    'react/default-props-match-prop-types': 'warn',
    'react/forbid-dom-props': [
      'warn',
      {
        forbid: ['style'],
      },
    ],
    'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': ['error'],
    'react/no-did-update-set-state': ['error'],
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': [
      'warn',
      {
        ignoreStateless: true,
      },
    ],
    'react/no-redundant-should-component-update': 'warn',
    'react/no-render-return-value': 'error',
    'react/no-typos': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unescaped-entities': ['warn'],
    'react/no-unknown-property': ['error'],
    'react/no-unsafe': 'warn',
    'react/no-unused-prop-types': ['warn'],
    'react/no-unused-state': 'warn',
    'react/no-will-update-set-state': ['warn'],
    'react/prop-types': ['warn'],
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': ['warn', { forbidDefaultForRequired: true }],
    'react/require-render-return': 'error',
    'react/sort-comp': ['warn'],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    // Ensures that any component or prop methods used to handle events are correctly prefixed
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': ['warn'],
    'react/jsx-key': 'warn',
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
    'react/jsx-no-target-blank': ['warn'],
    'react/jsx-no-undef': 'error',
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    'react/jsx-fragments': 'warn',
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref'],
      },
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',
  },
}

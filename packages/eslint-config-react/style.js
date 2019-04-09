/**
 * strvcom/eslint-config-react
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

// These rules represent coding style targeted for React components.
module.exports = {
  extends: require.resolve('@strv/eslint-config-base/style'),

  plugins: ['react'],

  rules: {
    // Enforce consistent usage of destructuring assignment of props, state, and context
    'react/destructuring-assignment': [
      'warn',
      'always',
      {
        ignoreClassFields: true,
      },
    ],

    // Validate closing bracket location in JSX
    // This rule checks all JSX multiline elements and verifies the location of the closing bracket.
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],

    // Disallow unnecessary curly braces in JSX props and/or children
    'react/jsx-curly-brace-presence': ['warn', 'never'],

    // Disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': [
      'warn',
      {
        when: 'never',
        allowMultiline: true,
      },
    ],

    // Enforce or disallow spaces around equal signs in JSX attributes
    // This rule will enforce consistency of spacing around equal signs in JSX attributes, by
    // requiring or one or more spaces before and after =.
    'react/jsx-equals-spacing': ['warn', 'never'],

    // Configure the position of the first property
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],

    // Validate JSX indentation
    'react/jsx-indent': ['warn', 2],

    // Validate props indentation in JSX
    'react/jsx-indent-props': ['warn', 2],

    // Validate JSX maximum depth
    'react/jsx-max-depth': [
      'warn',
      {
        max: 4,
      },
    ],

    // Enforce PascalCase for user-defined JSX components
    // Enforces coding style that user-defined JSX components are defined and referenced in
    // PascalCase.
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    // Disallow multiple spaces between inline JSX props
    // Enforces that there is exactly one space between all attributes and after tag name and the
    // first attribute in the same line.
    'react/jsx-props-no-multi-spaces': 'warn',

    // Validate whitespace in and around the JSX opening and closing brackets
    // This rule checks the whitespace inside and surrounding the JSX syntactic elements.
    'react/jsx-tag-spacing': 'warn',

    // Enforce one JSX element per line
    // This option limits every line in JSX to one expression each.
    'react/jsx-one-expression-per-line': [
      'warn',
      {
        allow: 'single-child',
      },
    ],

    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 'warn',

    // Enforce component methods order
    // When creating React components it is more convenient to always follow the same organisation
    // for methods order to helps you to easily find lifecyle methods, event handlers, etc.
    'react/sort-comp': [
      'warn',
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^handle.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
  },
}

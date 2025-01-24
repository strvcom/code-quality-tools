import style from '@strv/eslint-config-base/style'
import react from 'eslint-plugin-react'

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: {
    ...style.plugins,
    react,
  },
  rules: {
    ...style.rules,

    // Enforce consistent usage of destructuring assignment of props, state, and context
    'react/destructuring-assignment': [
      'warn',
      'always',
      {
        ignoreClassFields: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    '@stylistic/jsx-closing-tag-location': 'warn',

    // Validate closing bracket location in JSX
    // This rule checks all JSX multiline elements and verifies the location of the closing bracket.
    '@stylistic/jsx-closing-bracket-location': ['warn', 'line-aligned'],

    // Disallow unnecessary curly braces in JSX props and/or children
    '@stylistic/jsx-curly-brace-presence': ['warn', 'never'],

    // Disallow spaces inside of curly braces in JSX attributes
    '@stylistic/jsx-curly-spacing': [
      'warn',
      {
        when: 'never',
        allowMultiline: true,
      },
    ],

    // Enforce or disallow spaces around equal signs in JSX attributes
    // This rule will enforce consistency of spacing around equal signs in JSX attributes, by
    // requiring or one or more spaces before and after =.
    '@stylistic/jsx-equals-spacing': ['warn', 'never'],

    // Configure the position of the first property
    '@stylistic/jsx-first-prop-new-line': ['warn', 'multiline'],

    // Validate JSX indentation
    '@stylistic/jsx-indent': ['warn', 2],

    // Validate props indentation in JSX
    '@stylistic/jsx-indent-props': ['warn', 2],

    // Validate JSX maximum depth
    'react/jsx-max-depth': [
      'warn',
      {
        max: 9,
      },
    ],

    // Enforce PascalCase for user-defined JSX components
    // Enforces coding style that user-defined JSX components are defined and referenced in
    // PascalCase.
    '@stylistic/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    // Disallow multiple spaces between inline JSX props
    // Enforces that there is exactly one space between all attributes and after tag name and the
    // first attribute in the same line.
    '@stylistic/jsx-props-no-multi-spaces': 'warn',

    // Validate whitespace in and around the JSX opening and closing brackets
    // This rule checks the whitespace inside and surrounding the JSX syntactic elements.
    '@stylistic/jsx-tag-spacing': 'warn',

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

    // Enforce where React component static properties should be positioned
    // This rule allows you to enforce where childContextTypes, contextTypes, contextType,
    // defaultProps, displayName, and propTypes are declared in an ES6 class. By default, this rule
    // will check for and warn about declaring any of the above properties outside of the class
    // body.
    'react/static-property-placement': 'warn',

    // Enforce propTypes declarations alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    'react/sort-prop-types': 'warn',

    // These rules override the base style configs import rules
    // in React it is not common or even viable to structure exports like this
    'import/group-exports': 'off',
    'import/exports-last': 'off',

    // when trying to auto fix this rule it breaks React syntax
    'arrow-body-style': 'off',
  },
}

export default config

import base from '@strv/eslint-config-base'
import react from 'eslint-plugin-react'
import a11y from 'eslint-plugin-jsx-a11y'
import hooks from 'eslint-plugin-react-hooks'

/** @type {import("eslint").Linter.FlatConfig} */
const config = {
  plugins: {
    ...base.plugins,
    react,
    'jsx-a11y': a11y,
    'react-hooks': hooks,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    ...base.rules,

    // Enforces consistent naming for boolean props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'warn',
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message:
          'Boolean prop: ({{ propName }}) should start with is/has - pattern: ({{ pattern }})',
      },
    ],

    // Prevent usage of button elements without an explicit type attribute
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': ['warn', { reset: false }],

    // Prevent extraneous defaultProps on components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': 'warn',

    // Enforce consistent usage of destructuring assignment of props, state, and context
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'warn',

    // Forbid certain props on DOM Nodes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
    'react/forbid-dom-props': [
      'warn',
      {
        forbid: ['style', 'id'],
      },
    ],

    // Forbids using another component's prop types unless they are explicitly imported/exported
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],

    // Prevent using this.state inside this.setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 'error',

    // Prevent using Array index in key props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'warn',

    // Prevent passing of children as props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': 'error',

    // Prevent usage of dangerous JSX properties
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'warn',

    // This rule helps prevent problems caused by using children and the dangerouslySetInnerHTML
    // prop at the same time
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'error',

    // Prevent usage of setState in componentDidMount, no-op for >= v16.3
    'react/no-did-mount-set-state': 'warn',

    // Prevent usage of setState in componentDidUpdate, no-op for >= v16.3
    'react/no-did-update-set-state': 'warn',

    // Prevent usage of deprecated methods, including component lifecyle methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': 'warn',

    // NEVER mutate this.state directly, as calling setState() afterwards may replace the mutation
    //  you made. Treat this.state as if it were immutable
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    // Facebook will eventually deprecate findDOMNode as it blocks certain improvements in React in
    // the future. Use callback refs instead
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 'error',

    // isMounted is an anti-pattern, is not available when using ES6 classes, and it is on its
    // way to being officially deprecated
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 'error',

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'warn',

    // Prevent usage of the return value of React.render
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'error',

    // Ensure no casing typos were made declaring static class properties and lifecycle methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 'error',

    // Currently, two ways are supported by React to refer to components. The first way, providing
    // a string identifier, is now considered legacy in the official documentation
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': 'error',

    // Prevent using this in stateless functional components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',

    // Rule prevents characters that you may have meant as JSX escape characters from being
    // accidentally injected as a text node in JSX statements
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': ['error'],

    // In JSX all DOM properties and attributes should be camelCased to be consistent with standard
    // JavaScript style
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': ['error'],

    // Certain legacy lifecycle methods are unsafe for use in async React applications
    // and cause warnings in strict mode
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    'react/no-unsafe': ['warn', { checkAliases: true }],

    // Warns you if you have defined a prop type but it is never being used anywhere
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': ['warn'],

    // Warns you if you have defined a property on the state, but it is not being used anywhere
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    'react/no-unused-state': 'warn',

    // Prevent usage of setState in componentWillUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': ['error'],

    // Enforce ES5 or ES6 class for React Components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': 'warn',

    // Enforce that props are read-only
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
    'react/prefer-read-only-props': 'warn',

    // Enforce stateless React Components to be written as a pure function
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'error',

    // PropTypes improve the reusability of your component by validating the received data
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': ['warn'],

    // Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': ['warn', { forbidDefaultForRequired: true }],

    // Enforce ES5 or ES6 class for returning value in render function
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 'error',

    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'error',

    // Enforce component methods order (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': ['warn'],

    // Enforce the state initialization style to be with a class property
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    'react/state-in-constructor': ['warn', 'never'],

    // Enforce style prop value being an object
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',

    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 'error',

    // Enforce boolean attributes notation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['warn', 'never'],

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
    '@stylistic/jsx-child-element-spacing': 'error',

    // Restrict file extensions that may contain JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],

    // Ensures that any component or prop methods used to handle events are correctly prefixed
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': ['warn'],

    // Warn if an element that likely requires a key prop--namely, one present in an array literal
    //  or an arrow function expression
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'warn',

    // A bind call or arrow function in a JSX prop will create a brand new function on every single
    //  render. This is bad for performance, as it may cause unnecessary re-renders if a brand new
    // function is passed as a prop to a component that uses reference equality check on the prop
    // to determine if it should update
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],

    // This rule prevents comment strings (e.g. beginning with // or /*) from being accidentally
    // injected as a text node in JSX statements
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'warn',

    // Prevent react contexts from taking non-stable values
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    'react/jsx-no-constructed-context-values': 'warn',

    // Creating JSX elements with duplicate props can cause unexpected behavior in your application
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // When creating a JSX element that has an a tag, it is often desired to have the link open
    // in a new tab using the target='_blank' attribute. Using this attribute unaccompanied by
    // rel='noreferrer noopener', however, is a severe security vulnerability. This rules requires
    //  that you accompany target='_blank' attributes with rel='noreferrer noopener'
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': ['warn', { enforceDynamicLinks: 'always' }],

    // This rule helps locate potential ReferenceErrors resulting from misspellings
    //  or missing components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',

    // Prevent usage of javascript: URLs
    // In React 16.9 any URLs starting with javascript: scheme log a warning. React considers the
    // pattern as a dangerous attack surface, see details. In a future major release, React will
    // throw an error if it encounters a javascript: URL.
    'react/jsx-no-script-url': 'error',

    // This rule allows you to enforce curly braces or disallow unnecessary curly braces
    //  in JSX props and/or children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    '@stylistic/jsx-curly-brace-presence': ['warn', 'never'],
    // Enforce shorthand or standard form for React fragments
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': 'warn',

    // Disallow unnecessary fragments
    // A fragment is redundant if it contains only one child, or if it is the child of a html
    // element, and is not a keyed fragment.
    'react/jsx-no-useless-fragment': 'warn',

    // Enforces coding style that user-defined JSX components are defined andreferenced in
    // PascalCase
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    '@stylistic/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    // JSX expands to a call to React.createElement, a file which includes React but only uses
    //  JSX should consider the React variable as used
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': 'error',

    // Prevent variables used in JSX to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',

    // Plugin enforces the Rules of Hooks (https://reactjs.org/docs/hooks-rules.html)
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',

    // Enforce emojis are wrapped in and provide screenreader access
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
    'jsx-a11y/accessible-emoji': 'warn',

    // Enforce that all elements that require alternative text have meaningful information
    // to relay back to the end user
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
    'jsx-a11y/alt-text': 'warn',

    // Enforce that anchors have content and that the content is accessible to screen readers
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
    'jsx-a11y/anchor-has-content': 'warn',

    // Enforce all anchors are valid, navigable elements
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref'],
      },
    ],

    // Enforce elements with aria-activedescendant are tabbable
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',

    // Elements cannot use an invalid ARIA attribute
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
    'jsx-a11y/aria-props': 'warn',

    // ARIA state and property values must be valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
    'jsx-a11y/aria-proptypes': 'warn',

    // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
    'jsx-a11y/aria-role': 'warn',

    // Enforce that elements that do not support ARIA roles, states, and properties do not have
    // those attributes
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
    'jsx-a11y/aria-unsupported-elements': 'warn',

    // Ensure the autocomplete attribute is correct and suitable for the form field it is used with
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md
    'jsx-a11y/autocomplete-valid': 'warn',

    // Enforce onClick is accompanied by at least one of the following: onKeyUp, onKeyDown,
    // onKeyPress. Coding for the keyboard is important for users with physical disabilities who
    // cannot use a mouse, AT compatibility, and screenreader users
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
    'jsx-a11y/click-events-have-key-events': 'warn',

    // Enforce that a control (an interactive element) has a text label
    'jsx-a11y/control-has-associated-label': [
      'off',
      {
        ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        includeRoles: ['alert', 'dialog'],
      },
    ],

    // Enforce heading (h1, h2, etc) elements contain accessible content
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
    'jsx-a11y/heading-has-content': 'warn',

    // Enforce <html> element has lang prop
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
    'jsx-a11y/html-has-lang': 'warn',

    // <iframe> elements must have a unique title property to indicate its content to the user
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
    'jsx-a11y/iframe-has-title': 'warn',

    // Enforce <img> alt prop does not contain the word "image", "picture", or "photo"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
    'jsx-a11y/img-redundant-alt': 'warn',

    // Elements with an interactive role and interaction handlers (mouse or key press) must be
    // focusable
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md
    'jsx-a11y/interactive-supports-focus': [
      'error',
      {
        tabbable: [
          'button',
          'checkbox',
          'link',
          'progressbar',
          'searchbox',
          'slider',
          'spinbutton',
          'switch',
          'textbox',
        ],
      },
    ],

    // Enforce that a label tag has a text label and an associated control
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
    'jsx-a11y/label-has-associated-control': 'warn',

    // Enforce lang attribute has a valid value
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
    'jsx-a11y/lang': 'warn',

    // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
    'jsx-a11y/mouse-events-have-key-events': 'warn',

    // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by
    // a screenreader
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
    'jsx-a11y/no-access-key': 'warn',

    // Enforce that autoFocus prop is not used on elements. Autofocusing elements can cause
    // usability issues for sighted and non-sighted users, alike
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
    'jsx-a11y/no-autofocus': 'warn',

    // Enforces that no distracting elements are used. Elements that can be visually distracting
    // can cause accessibility issues with visually impaired users
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
    'jsx-a11y/no-distracting-elements': 'warn',

    // Interactive elements should not be assigned non-interactive roles
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'warn',
      {
        tr: ['none', 'presentation'],
      },
    ],

    // Non-interactive elements should not be assigned mouse or keyboard event listeners
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
    'jsx-a11y/no-noninteractive-element-interactions': [
      'warn',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],

    // Non-interactive elements should not be assigned interactive roles
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'warn',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],

    // tabIndex should only be declared on interactive elements
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md
    'jsx-a11y/no-noninteractive-tabindex': [
      'warn',
      {
        tags: [],
        roles: ['tabpanel'],
      },
    ],

    // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': [
      'warn',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],

    // Enforce explicit role property is not the same as implicit/default role property on element
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
    'jsx-a11y/no-redundant-roles': 'warn',

    // Elements with ARIA roles must have all required attributes for that role
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
    'jsx-a11y/role-has-required-aria-props': 'warn',

    // Enforce that elements with explicit or implicit roles defined contain only aria-*
    // properties supported by that role
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
    'jsx-a11y/role-supports-aria-props': 'warn',

    // The scope scope should be used only on <th> elements
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
    'jsx-a11y/scope': 'warn',

    // Enforce tabIndex value is not greater than zero
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
    'jsx-a11y/tabindex-no-positive': 'warn',

    'arrow-body-style': 'off',

    'import/order': ['error', {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      groups: [['builtin', 'external'], 'internal', 'sibling', 'index'],
      'newlines-between': 'always',
      pathGroups: [{
        // This should be added both to @linters and @strv/code-quality-tools
        pattern: '~/**',
        group: 'internal',
      }],
    }],

    'max-classes-per-file': 'off',
    'no-undefined': 'off',

    'import/group-exports': 'off',
    'import/exports-last': 'off',
    'import/no-default-export': 'error',
  },
}

export default config

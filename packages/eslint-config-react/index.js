/**
 * strvcom/eslint-config-react
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  extends: require.resolve('@strv/eslint-config-base'),

  env: {
    es6: true,
    browser: true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    'react',
  ],

  rules: {
    // Enforce JSX Quote Style
    // This rule enforces the consistent use of either double or single quotes in JSX attributes.
    'jsx-quotes': ['warn', 'prefer-double'],

    // Prevent usage of button elements without an explicit type attribute
    // The default value of type attribute for button HTML element is "submit" which is often not
    // the desired behavior and may lead to unexpected page reloads. This rules enforces an explicit
    // type attribute for all the button elements and checks that its value is valid per spec
    // (button, submit, reset).
    'react/button-has-type': 'warn',

    // Enforce boolean attributes notation in JSX
    // In JSX when using a boolean attribute you can set the attribute value to true or omit the
    // value. This rule will enforce one or the other to keep consistency in your code.
    'react/jsx-boolean-value': ['warn', 'never'],

    // Enforce the closing tag location for multiline JSX elements
    'react/jsx-closing-tag-location': ['warn'],

    // Detect missing key prop
    // Warn if an element that likely requires a key prop--namely, one present in an array literal
    // or an arrow function expression.
    'react/jsx-key': 'warn',

    // No .bind() or Arrow Functions in JSX Props
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowBind: false,
    }],

    // Prevent comments from being inserted as text nodes
    // This rule prevents comment strings (e.g. beginning with // or /*) from being accidentally
    // injected as a text node in JSX statements.
    'react/jsx-no-comment-textnodes': 'warn',

    // Enforce all defaultProps have a corresponding non-required PropType
    // Having defaultProps for non-existent propTypes is likely the result of errors in refactoring
    // or a sign of a missing propType. Having a defaultProp for a required property similarly
    // indicates a possible refactoring problem
    'react/default-props-match-prop-types': 'warn',

    // Prevent usage of dangerous JSX properties
    'react/no-danger': 'warn',

    // Prevent duplicate properties in JSX
    // Creating JSX elements with duplicate props can cause unexpected behavior in your application.
    'react/jsx-no-duplicate-props': ['error', {
      ignoreCase: true,
    }],

    // Prevent usage of unsafe target='_blank' When creating a JSX element that has an a tag, it is
    // often desired to have the link open in a new tab using the target='_blank' attribute. Using
    // this attribute unaccompanied by rel='noreferrer noopener', however, is a severe security
    // vulnerability.
    'react/jsx-no-target-blank': 'error',

    // Disallow undeclared variables in JSX
    // This rules can help you locate potential ReferenceErrors resulting from misspellings or
    // missing components.
    'react/jsx-no-undef': 'error',

    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 'error',

    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error',

    // Prevent missing parentheses around multiline
    // Wrapping multiline JSX in parentheses can improve readability and/or convenience.
    'react/jsx-wrap-multilines': ['error', {
      declaration: true,
      assignment: true,
      return: true,
    }],

    // Prevent usage of array index in keys
    // It's a bad idea to use the array index since it doesn't uniquely identify your elements. In
    // cases where the array is sorted or an element is added to the beginning of the array, the
    // index will be changed even though the element representing that index may be the same. This
    // results in in unnecessary renders.
    'react/no-array-index-key': 'warn',

    // Prevent using this.state within a this.setState
    // This rule should prevent usage of this.state inside setState calls. Such usage of this.state
    // might result in errors when two state calls are called in batch and thus referencing old
    // state and not the current state.
    'react/no-access-state-in-setstate': 'error',

    // Prevent usage of deprecated methods
    'react/no-deprecated': 'warn',

    // Prevent usage of setState in componentDidMount
    // Updating the state after a component mount will trigger a second render() call and can lead
    // to property/layout thrashing.
    'react/no-did-mount-set-state': 'error',

    // Prevent usage of setState in componentDidUpdate
    // Updating the state after a component update will trigger a second render() call and can lead
    // to property/layout thrashing.
    'react/no-did-update-set-state': 'error',

    // Prevent usage of setState in componentWillUpdate
    // Updating the state during the componentWillUpdate step can lead to indeterminate component
    // state and is not allowed.
    'react/no-will-update-set-state': 'error',

    // Prevent direct mutation of this.state
    // Never mutate this.state directly, as calling setState() afterwards may replace the mutation
    // you made. Treat this.state as if it were immutable.
    'react/no-direct-mutation-state': 'error',

    // Error when using findDOMNode()
    // Facebook will eventually deprecate findDOMNode as it blocks certain improvements in React in
    // the future. It is recommended to use callback refs instead
    'react/no-find-dom-node': 'error',

    // Prevent usage of isMounted
    // isMounted is an anti-pattern, is not available when using ES6 classes, and it is on its way
    // to being officially deprecated.
    'react/no-is-mounted': 'error',

    // Prevent multiple component definitions per file
    // Declaring only one component per file improves readability and reusability of components.
    'react/no-multi-comp': ['error', {
      ignoreStateless: true,
    }],

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    // Warns if you have shouldComponentUpdate defined when defining a component that extends
    // React.PureComponent. While having shouldComponentUpdate will still work, it becomes pointless
    // to extend PureComponent.
    'react/no-redundant-should-component-update': 'warn',

    // Prevent usage of the return value of React.render
    // ReactDOM.render() currently returns a reference to the root ReactComponent instance. However,
    // using this return value is legacy and should be avoided because future versions of React may
    // render components asynchronously in some cases.
    'react/no-render-return-value': 'error',

    // Prevent using string references
    // Currently, two ways are supported by React to refer to components. The first one, providing a
    // string identifier is considered legacy in the official documentation. Referring to components
    // by setting a property on the this object in the reference callback is preferred.
    'react/no-string-refs': 'error',

    // Prevent this from being used in stateless functional components
    // When using a stateless functional component (SFC), props/context aren't accessed in the same
    // way as a class component or the create-react-class format. Both props and context are passed
    // as separate arguments to the component instead. Also, as the name suggests, a stateless
    // component does not have state on this.state.
    'react/no-this-in-sfc': 'error',

    // Prevents common typos
    // This rule checks whether the declared static class properties and lifecycle methods related
    // to React components do not contain any typos.
    'react/no-typos': 'warn',

    // Prevent usage of unknown DOM property
    // In JSX all DOM properties and attributes should be camelCased to be consistent with standard
    // JavaScript style. This can be a possible source of error if you are used to writing plain
    // HTML.
    'react/no-unknown-property': 'error',


    // Prevent usage of UNSAFE_ methods
    // Certain legacy lifecycle methods are unsafe for use in async React applications and cause
    // warnings in strict mode. These also happen to be the lifecycles that cause the most confusion
    // within the React community.
    'react/no-unsafe': 'error',

    // Prevent definitions of unused prop types
    // Warns you if you have defined a prop type but it is never being used anywhere.
    'react/no-unused-prop-types': ['error', {
      customValidators: [],
      // Enabled after discussion in #21
      skipShapeProps: true,
    }],

    // Prevent definition of unused state fields
    'react/no-unused-state': 'warn',

    // Enforce ES6 class for React Components
    'react/prefer-es6-class': ['error', 'always'],

    // Enforce stateless React Components to be written as a pure function
    // Stateless functional components are more simple than class based components and will benefit
    // from future React performance optimizations specific to these components.
    'react/prefer-stateless-function': 'warn',

    // Prevent missing props validation in a React component definition
    // PropTypes improve the reusability of your component by validating the received data. It can
    // warn other developers if they make a mistake while reusing the component with improper data
    // type.
    'react/prop-types': ['error', {
      ignore: [],
      customValidators: [],
    }],

    // Prevent missing React when using JSX
    // When using JSX, <a /> expands to React.createElement("a"). Therefore the React variable must
    // be in scope.
    'react/react-in-jsx-scope': 'error',

    // Enforce a `defaultProps` definition for every prop that is not a required prop
    // This rule aims to ensure that any non-required PropType declaration of a component has a
    // corresponding `defaultProps` value.
    'react/require-default-props': ['error', {
      forbidDefaultForRequired: true,
    }],

    // Enforce ES5 or ES6 class for returning value in render function
    // When writing the render method in a component it is easy to forget to return the JSX content.
    // This rule will warn if the return statement is missing.
    'react/require-render-return': 'error',

    // Enforce style prop value being an object
    // Require that the value of the prop style be an object or a variable that is an object.
    'react/style-prop-object': 'error',

    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    // There are some HTML elements that are only self-closing (e.g. img, br, hr). These are
    // collectively known as void DOM elements. If you try to give these children, React will give
    // you a warning:
    // Invariant Violation: img is a void element tag and must neither have children nor use
    // dangerouslySetInnerHTML
    'react/void-dom-elements-no-children': 'error',

    // Forbid certain props on DOM Nodes
    // This rule checks all JSX elements and verifies that no forbidden props are used on DOM Nodes.
    // This rule only applies to DOM Nodes (e.g. <div />) and not Components (e.g. <Component />).
    // @TODO(semver-major): Change to error
    'react/forbid-dom-props': ['warn', {
      forbid: ['style', 'id'],
    }],
  },
}

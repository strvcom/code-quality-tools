/**
 *
 * @author      André Nanninga <andre@nannin.ga>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  extends: [require.resolve('@strv/eslint-config-react')],

  env: {
    'react-native/react-native': true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['react', 'react-native', 'react-native-a11y'],

  rules: {
    // Detect StyleSheet rules which are not used in your React components.
    // When working on a component over a longer period of time, you could end up with unused
    // StyleSheet rules that slipped in over time but are forgotten as you continue to improve your
    // UX/UI design.
    'react-native/no-unused-styles': 'warn',

    // Enforce using platform specific filenames when necessary.
    // When working on a project that supports both Android and IOS, you have to make sure that you
    // use platform specific filenames when you use platform specific components to produce the
    // correct bundle per platform.
    'react-native/split-platform-components': 'error',

    // Detect JSX components with inline styles that contain literal values.
    // This rule detects inline style objects when they contain literal values. If inline styles
    // only contain variable values, the style is considered acceptable because it's sometimes
    // necessary to set styles based on state or props.
    'react-native/no-inline-styles': 'warn',

    // Detect StyleSheet rules and inline styles containing color literatls instead of variables.
    // The rule looks at all properties that contain color (case-insensitive) in their name in
    // either StyleSheet definitions or JSX properties that have style in their name.
    'react-native/no-color-literals': 'warn',

    // Detect raw text outside of Text component.
    // All strings in React NAtive should be wrapped with a Text component. Use `skip` to enable
    // text in custom components. Handy for styled-components.
    'react-native/no-raw-text': [
      'error',
      {
        skip: [],
      },
    ],

    // Enforce that views that have accessible={true}, also have an accessibilityLabel prop.
    // When an element has the accessible={true} property, it is important to set an
    // accessibilityLabel on the element, so that people who use VoiceOver know what element they
    // have selected. VoiceOver will read the property value when a user selects the associated
    // element.
    'react-native-a11y/accessibility-label': 'error',

    // Enforce all <Touchable\*> components have accessibilityRole prop or both accessibilityTraits
    // and accessibilityComponentType props set.
    // <Touchable*> components must have the accessibilityRole prop or both accessibilityTraits and
    // accessibilityComponentType props in order to be fully accessible.
    'react-native-a11y/has-accessibility-props': 'error',

    // Enforce accessibilityComponentType property value is valid.
    // The accessibilityComponentType property is essentially the android version of
    // accessibilityTraits and is used to alert a user, using TalkBack, what kind of element they
    // have selected.
    'react-native-a11y/has-valid-accessibility-component-type': 'error',

    // Enforce accessibilityLiveRegion prop values must be valid.
    // On android devices, when components dynamically change, we want TalkBack to alert the end
    // user. This is made possible by the accessibilityLiveRegion property.
    'react-native-a11y/has-valid-accessibility-live-region': 'error',

    // Enforce accessibilityRole property value is valid.
    // The accessibilityRole property is used to tell Talkback or Voiceover the role of a UI
    // Element.
    'react-native-a11y/has-valid-accessibility-role': 'error',

    // Enforce accessibilityStates property value is valid.
    // The accessibilityStates property is used to tell Talkback or Voiceover the state a UI Element
    // is in.
    'react-native-a11y/has-valid-accessibility-states': 'error',

    // Enforce accessibilityTraits and accessibilityComponentType prop values must be valid.
    // The accessibilityTraits property is used to tell a person using VoiceOver what kind of
    // element they have selected.
    'react-native-a11y/has-valid-accessibility-traits': 'error',

    // Enforce importantForAccessibility property value is valid.
    // If there are two (or more) overlapping UI components with the same parent, default
    // accessibility focus can have unpredictable behavior. The importantForAccessibility property
    // will resolve this by controlling if a view fires accessibility events and if it is reported
    // to accessibility services.
    'react-native-a11y/has-valid-important-for-accessibility': 'error',

    // Enforce if a view has accessible={true}, that there are no touchable elements inside.
    // <Touchable*> or will not work inside an accessible element. Any element that has the
    // accessible={true} property (along with the accessibleLabel property) must therefore not
    // contain any <Touchable*> or elements.
    'react-native-a11y/no-nested-touchables': 'error',
  },
}

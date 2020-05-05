'use strict'

module.exports = {
  plugins: ['stylelint-react-native'],
  extends: [
    '@strv/stylelint-styled-components-config',
  ],
  rules: {
    //
    // Disable base rules
    //

    'unit-blacklist': ['px'],

    //
    // React Native Plugin
    //

    'react-native/css-property-no-unknown': true,


    //
    // React Native Environment
    //

    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'no-empty-source': null,
    'no-missing-end-of-source-newline': null,
    'at-rule-whitelist': [
      [],
      {
        severity: 'error',
        message:
          'this at-rule is not supported when using styled-components with React Native.'
      }
    ],
    'function-whitelist': [
      [
        'rgb',
        'rgba',
        'hsl',
        'hsla',
        'perspective',
        'rotate',
        'rotateX',
        'rotateY',
        'rotateZ',
        'scale',
        'scaleX',
        'scaleY',
        'translate',
        'translateX',
        'translateY',
        'skew',
        'skewX',
        'skewY',
        'matrix'
      ],
      {
        severity: 'error',
        message:
          'this function is not supported when using styled-components with React Native.'
      }
    ],
    'unit-whitelist': [
      ['px', 'deg', '%'],
      {
        severity: 'error',
        message:
          'this unit is not supported when using styled-components with React Native.'
      }
    ],
    'selector-pseudo-class-whitelist': [
      [],
      {
        severity: 'error',
        message:
          'pseudo class selectors are not supported when using styled-components with React Native.'
      }
    ],
    // stylelint-processor-styled-components creates
    // a wrapping class selector for the component.
    'selector-max-class': [
      1,
      {
        severity: 'error',
        message:
          'class selectors are not supported when using styled-components with React Native.'
      }
    ],
    'selector-max-universal': [
      0,
      {
        severity: 'error',
        message:
          'universal selectors are not supported when using styled-components with React Native.'
      }
    ],
    'selector-max-attribute': [
      0,
      {
        severity: 'error',
        message:
          'attribute selectors are not supported when using styled-components with React Native.'
      }
    ],
    'selector-max-type': [
      0,
      {
        severity: 'error',
        message:
          'type selectors are not supported when using styled-components with React Native.'
      }
    ],
    'selector-max-id': [
      0,
      {
        severity: 'error',
        message:
          'id selectors are not supported when using styled-components with React Native.'
      }
    ]
  }
}

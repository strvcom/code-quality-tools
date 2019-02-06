/**
 * strvcom/eslint-config-react
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  extends: '@strv/eslint-config-base/optional',

  rules: {
    // Disallow Use of Alert
    // This rule is aimed at catching debugging code that should be removed and popup UI elements
    // that should be replaced with less obtrusive, custom UIs.
    'no-alert': 'warn',

    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': ['warn', {
      ignoreCase: true,
      callbacksLast: false,
      requiredFirst: false,
      sortShapeProp: true,
    }],

    // Forbid foreign propTypes
    // This rule forbids using another component's prop types unless they are explicitly
    // imported/exported. This allows people who want to use
    // babel-plugin-transform-react-remove-prop-types to remove propTypes from their components in
    // production builds, to do so safely
    'react/forbid-foreign-prop-types': 'warn',

    // This rule prevents characters that you may have meant as JSX escape characters from being
    // accidentally injected as a text node in JSX statements.
    // Also breaks syntax highlighting in github pull requests.
    'react/no-unescaped-entities': 'warn',
  },
}

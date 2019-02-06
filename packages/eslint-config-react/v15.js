/**
 * strvcom/eslint-config-react
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  extends: [
    './index.js',
    './accessibility.js',
  ],

  rules: {
    'operator-linebreak': 'off',
  },

  // Configures the react plugin to treat some rules with regard to this specific React.js version
  settings: {
    react: {
      version: '15.5',
    },
  },
}

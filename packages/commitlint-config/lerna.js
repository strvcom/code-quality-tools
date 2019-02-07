/**
 * strvcom/commitlint-config
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  extends: [
    './index.js',
    '@commitlint/config-lerna-scopes',
  ],

  rules: {
    'body-leading-blank': [2, 'always'],
  },
}

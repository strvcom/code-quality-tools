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
    '@commitlint/config-conventional',
  ],

  rules: {
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [0],
    'footer-max-line-length': [0],
  },
}

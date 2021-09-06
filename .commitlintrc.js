'use strict'

module.exports = {
  extends: [
    './packages/commitlint-config',
  ],

  rules: {
    'scope-enum': [1, 'always', [
      // Use when committing rule changes/additions/removals etc.
      'rule',
      // Use when updating dependencies in rulesets
      'deps',
      // Use for anything that does not directly affect rulesets, ie. updating repo-wide
      // dependencies etc.
      'repo',
    ]],

    'footer-max-line-length': [0],
  },
}

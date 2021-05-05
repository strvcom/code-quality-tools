/**
 * strvcom/eslint-config-typescript
 *
 * @author      Danny Kijkov <dankijkov@gmail.com>
 * @copyright   2021 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const globs = require('@strv/eslint-config-base/globs')

module.exports = {

  rules: {
    'react/prop-types': 'off',

    '@typescript-eslint/consistent-type-definitions': 'off',

    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'expected'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z][a-zA-Z]+',
          match: true,
        },
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],

    '@typescript-eslint/no-shadow': 'off',
    'no-shadow': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off',

    // Must be off, otherwise @typescript-eslint/member-ordering is triggered
    '@typescript-eslint/method-signature-style': 'off',

    // Autofixable, but breakes Next.js build
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3,
      },
    ],
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
  },
  overrides: [
    // Storybook
    {
      files: globs.storybook,
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'off',
        'import/group-exports': 'off',
        'import/exports-last': 'off',
        'import/no-default-export': 'off',
      },
    },
    // Next.js
    {
      files: globs.nextJs,
      rules: {
        'import/no-default-export': 'off',
      },
    },
    // Tests
    {
      files: globs.tests,
      rules: {
        'import/no-unused-modules': 'off',
        'jest/expect-expect': 'off',
      },
    },
  ],
}

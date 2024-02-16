// We are not listing '@strv/eslint-config-react' in dependencies on purpose -
// - we don't want to spam Node.js users with unwanted React config.
// Also on the other hand we believe that React users will already have
// @strv/eslint-config-react configuration installed.
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@strv/eslint-config-react'
import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

/** @type {import("eslint").Linter.FlatConfig} */
const config = {
  plugins: {
    ...react.plugins,
    '@typescript-eslint': ts,
  },
  settings: {
    ...react.settings,
  },
  languageOptions: {
    ...react.languageOptions,
    parser,
  },
  rules: {
    ...react.rules,

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
    '@typescript-eslint/no-unnecessary-condition': 'off',
  },
}

export default config

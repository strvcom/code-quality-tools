# Migrating to flat config (ESLint v9 or >=8.56.0)

🚨 As of now (February 2024) some plugins used in these rulesets are not yet compatible with ESLint v9. While it is recommended that you upgrade your projects to the flat config format it also means that if you do, you will need to stay on ESLint v8 until all plugins are updated.

---

As of ESLint v9 the way ESLint is configured is going to change dramatically. Support for this new "flat" config format has been introduced to ESLint v8.56 behind a feature flag (`ESLINT_USE_FLAT_CONFIG=true` env var). This guide will help you rewrite your config to the new format.

## Documentation

ESLint: https://eslint.org/docs/latest/use/configure/configuration-files-new

## Old way

The old system was designed to support YAML, JSON, and JavaScript configuration files. You would use a ruleset or a plugin by providing its name (a string) and ESLint would look it up and use it. Also, ESLint automatically checked known JavaScript files and you had to go the extra mile to add support for ie. TypeScript (`.ts`) or React (`.jsx`) files.

```js
// .eslintrc.js

// Example config. Notice how it's not clear which files are going to be linted by default.
// Also notice that the `extends` field is a string and ESLint needs to load that module.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  reportUnusedDisableDirectives: true,
  extends: [
    '@strv/node/v20',
    '@strv/node/optional',
    '@strv/node/style',
  ],
  rules: {
    'no-warning-comments': 'off',
  },

  overrides: [{
    files: [
      '**/*.ts',
      '**/*.spec.ts',
      '**/*.e2e-spec.ts',
    ],
    extends: [
      '@strv/node/v20',
      '@strv/node/optional',
      '@strv/eslint-config-typescript',
      '@strv/eslint-config-typescript/style',
    ],
    parserOptions: {
      project: './tsconfig.json',
    },
```

## New way

The new system has several advantages over the previous config format but it also requires a bit more effort to properly set up. Each configuration now encourages to specify the files to which it should apply and all rulesets and plugins are provided as regular imported types because the configuration now must be written in JavaScript.

```js
// eslint.config.mjs

// This is a sample configuration for a TypeScript Node.js project.

// All plugins, parsers and rulesets must be imported as modules
import nodev20 from '@strv/eslint-config-node/v20'
import nodeopt from '@strv/eslint-config-node/optional'
import nodestyle from '@strv/eslint-config-node/style'
import ts from '@strv/eslint-config-typescript'
import tsopt from '@strv/eslint-config-typescript/optional'
import tsstyle from '@strv/eslint-config-typescript/style'
// Just to help us re-use the same globs multiple times
const files = {
  ts: '**/*.ts',
  mjs: '**/*.mjs',
}

// This will allow your IDE to provide autocomplete suggestions ✨
/** @type {Array<import("eslint").Linter.Config>} */
const config = [{
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  ignores: ['**/*.js', '*.d.ts', '!.*.js', 'node_modules'],
}, {
  // First, we provide a configuration object that supplies the tsconfig path to all plugins that might need it.
  files: [files.ts],
  languageOptions: {
    parserOptions: { project: './tsconfig.json' },
  } },
// Next, we apply all the rulesets, one by one, which we want to use for our TypeScript sources.
// ⚠️ Do not apply more than one ruleset inside the same configuration object as they would not get merged correctly.
{ files: [files.ts], ...nodev20 },
{ files: [files.ts], ...nodeopt },
{ files: [files.ts], ...ts },
{ files: [files.ts], ...tsopt },
{ files: [files.ts], ...tsstyle },

{ files: [files.mjs], ...nodev20 },
{ files: [files.mjs], ...nodeopt },
{ files: [files.mjs], ...nodestyle },
// Custom overrides
{ files: [files.ts],
  rules: {
    'no-warning-comments': 0,
    '@typescript-eslint/naming-convention': 'off',
  } },
]

export default config
```

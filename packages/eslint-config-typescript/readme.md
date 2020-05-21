# @strv/eslint-config-typescript

> 🔥 Experimental. Please report bugs, conflicts and other compatibility problems 🙏.

These configuration files are suitable to lint TypeScript code.

## Setup

To lint TypeScript files using ESLint and this ruleset you must

1. Install ESLint & this ruleset
1. Tell the TypeScript parser where your _tsconfig.json_ file is (not doing so will cause some TS-syntax-specific rules to not work at all)
1. Extend one or more of the included rulesets

See the example _.eslintrc.js_ file below for more details and make sure you read the [Parser's docs][ts-parser-configuration] about its settings.

## Configurations

### `@strv/eslint-config-typescript`

Suitable for linting TypeScript source files.

In addition to using this ruleset, you should also choose one base ruleset depending on your target platform:

- [`@strv/eslint-config-node`][eslint-config-node]
- [`@strv/eslint-config-react`][eslint-config-react]

## Optional configurations

### `@strv/eslint-config-typescript/optional`

Use this ruleset in conjunction with any of the above version-specific rulesets. Provides additional insights into potential inconsistencies in the project.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.

## Coding styles

### `@strv/eslint-config-typescript/style`

This ruleset includes rules which deal with how the code looks like and not how it works. It helps keeping the code clean and consistent. 🎨

A full configuration for a TypeScript on Node.js project:

```js
// .eslintrc.js
'use strict'

module.exports = {

  extends: [
    '@strv/eslint-config-node/v10',
    '@strv/eslint-config-node/optional',
    '@strv/eslint-config-typescript',
    '@strv/eslint-config-typescript/style',
  ],

  parserOptions: {
    // The project field is required in order for some TS-syntax-specific rules to function at all
    // @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
    project: './tsconfig.json',
  },
}
```

To actually lint .ts files, you must pass the `--ext` flag to ESLint:

```sh
eslint --ext ts --report-unused-disable-directives .
```

## VSCode integration

The [vscode-eslint](https://github.com/Microsoft/vscode-eslint) plugin for integrating ESLint into VSCode does not automatically parse TypeScript files. To do so, you must inform ESLint to enable on TypeScript files by adding this configuration to your settings (File > Preferences > Settings):

```json
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
```
> Notice we are adding `javascriptreact` and `typescriptreact` above. It won't harm adding those, but you can always omit these languages if not using them.

## License

See the [LICENSE](LICENSE) file for information.

[eslint-config-node]: https://www.npmjs.com/package/@strv/eslint-config-node
[eslint-config-react]: https://www.npmjs.com/package/@strv/eslint-config-react
[ts-parser-configuration]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration

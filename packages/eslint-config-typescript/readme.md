# @strvcom/eslint-config-typescript

> 🔥 Experimental. Please report bugs, conflicts and other compatibility problems 🙏.

These configuration files are suitable to lint TypeScript code.

## Configurations

### `@strv/eslint-config-typescript`

Suitable for linting TypeScript source files.

In addition to using this ruleset, you should also choose one base ruleset depending on your target platform:

- `@strv/eslint-config-node/v10`
- `@strv/eslint-config-react/v16`

A full configuration for a TypeScript on Node.js project:

```js
// .eslintrc.js
'use strict'

module.exports = {

  extends: [
    '@strv/eslint-config-node/v10',
    '@strv/eslint-config-node/optional',
    '@strv/eslint-config-typescript',
    '@strv/eslint-config-styleguide',
  ],
}
```

To actually lint .ts files, you must pass the `--ext` flag to ESLint:

```sh
eslint --ext ts --no-unused-disable-directives .
```

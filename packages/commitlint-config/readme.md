# @strvcom/commitlint-config

> STRV's config for commitlint

## Configurations

### `@strv/commitlint-config`

Suitable for all projects.

### `@strv/commitlint-config/lerna`

Suitable for projects structured as a Lerna-managed monorepo. In addition to the standard conventional commits ruleset, it checks the scope to match a package name managed by Lerna.

## Usage

```sh
npm i --dev @commitlint/cli @strv/commitlint-config
```

Now, create a _commitlint.config.js_ file with the following contents:

```js
'use strict'

module.exports = {
  extends: [
    '@strv/commitlint-config',
    // OR, for Lerna-managed monorepos:
    '@strv/commitlint-config/lerna',
  ],
}
```

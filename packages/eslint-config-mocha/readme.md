# @strv/eslint-config-mocha

> Configuration for Mocha test files.

## Installation

```sh
npm install -D @strv/eslint-config-mocha
```

## Usage

```js
// eslint.config.mjs
import mocha from '@strv/eslint-config-mocha'

/** @type {Array<import("eslint").Linter.Config>} */
const config = [{
  // Perhaps also apply other configs?
  { files: ['**/*.test.js'], ...mocha },
}]

export default config
```

## License

See the [LICENSE](LICENSE) file for information.

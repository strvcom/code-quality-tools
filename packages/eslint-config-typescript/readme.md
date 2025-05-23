# @strv/eslint-config-typescript

> Configuration for TypeScript projects.

## Installation

```sh
npm install -D @strv/eslint-config-typescript
```

## Rulesets

- `'@strv/eslint-config-typescript'`: A generic ruleset that focuses on code correctness
- `'@strv/eslint-config-typescript/optional'`: Addiitonal ruleset that might provide useful tips and hints how to improve your code
- `'@strv/eslint-config-typescript/style'`: Ruleset that focuses solely on code style (indentation, spacing, naming, syntax preference etc.)
- `'@strv/eslint-config-typescript/react'`: Ruleset that provides additional customisations for the `@strv/eslint-config-react` ruleset when working with TypeScript`

## Usage

```js
// eslint.config.mjs
import typescript from '@strv/eslint-config-typescript'
import optional from '@strv/eslint-config-typescript/optional'
import style from '@strv/eslint-config-typescript/style'
// Just to help us re-use the same globs multiple times
const globs = {
  js: '**/*.js',
}

/** @type {Array<import("eslint").Linter.Config>} */
const config = [
  { files: [globs.js], ...typescript },
  { files: [globs.js], ...optional },
  { files: [globs.js], ...style },
  // Any custom settings to be applied
  { files: [globs.js],
    languageOptions: { ecmaVersion: 2023 }
  },
]

export default config
```

## License

See the [LICENSE](LICENSE) file for information.

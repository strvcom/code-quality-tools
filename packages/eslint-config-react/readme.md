# @strv/eslint-config-react

> Configuration for React projects.

## Installation

```sh
npm install -D @strv/eslint-config-react
```

## Rulesets

- `'@strv/eslint-config-react'`: A generic ruleset that focuses on code correctness
- `'@strv/eslint-config-react/optional'`: Addiitonal ruleset that might provide useful tips and hints how to improve your code
- `'@strv/eslint-config-react/style'`: Ruleset that focuses solely on code style (indentation, spacing, naming, syntax preference etc.)

## Usage

```js
// eslint.config.mjs
import react from '@strv/eslint-config-react'
import optional from '@strv/eslint-config-react/optional'
import style from '@strv/eslint-config-react/style'
// Just to help us re-use the same globs multiple times
const globs = {
  jsx: '**/*.jsx',
}

/** @type {Array<import("eslint").Linter.FlatConfig>} */
const config = [
  { files: [globs.jsx], ...react },
  { files: [globs.jsx], ...optional },
  { files: [globs.jsx], ...style },
  // Any custom settings to be applied
  { files: [globs.jsx],
    languageOptions: { ecmaVersion: 2023, ecmaFeatures: { jsx: true } },
  },
]

export default config
```

## License

See the [LICENSE](LICENSE) file for information.

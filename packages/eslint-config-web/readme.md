# @strv/eslint-config-web

- [@strv/eslint-config-web](#strveslint-config-web)
  - [Installation](#installation)
  - [Rulesets](#rulesets)
  - [Usage](#usage)
    - [Customizations](#customizations)
      - [Formatters](#formatters)
      - [Unicorn \& Stylistic](#unicorn--stylistic)
      - [Other config](#other-config)
    - [VSCode](#vscode)
  - [License](#license)
    > Configuration for Web projects.

## Installation

```sh
# npm
npm install -D @strv/eslint-config-web
# yarn
yard add -D @strv/eslint-config-web
# pnpm
pnpm add -D @strv/eslint-config-web
```

## Rulesets

- `'@strv/eslint-config-web'`: STRV Frontend Ruleset that focuses on code correctness for web projects, which use TypeScript and React.

This ruleset is based on [Antfu ESLint Ruleset](https://github.com/antfu/eslint-config). If you are interested in more details about the rules, you can check the ruleset in [Config Inspector](https://eslint-config.antfu.me/).

## Usage

```js
import config from "@strv/eslint-config-web";

export default config;
```

### Customizations

```js
import { createConfig } from "@strv/eslint-config-web";

const config = createConfig(
  {
    ignores: ["devops/*", "custom-scripts/*"],
    unicornOverrides: {
      "unicorn/filename-case": [
        "error",
        {
          case: "camelCase",
          ignore: ["pull_request_template.md"],
        },
      ],
    },
    stylisticOverrides: {
      "style/arrow-parens": ["error", "always"],
    },
  },
  {
    files: ["**/*"],
    rules: {
      "check-file/filename-blocklist": "off",
    },
  },
);

export default config;
```

#### Formatters

If you would like to see more details about the exposed option `formatters`, please check the [official documentation](https://github.com/antfu/eslint-config?tab=readme-ov-file#formatters).

#### Unicorn & Stylistic

`unicornOverrides` and `stylisticOverrides` provide an option to adjust specific plugin rules.

`unicorn/*` rules should be listed in `unicornOverrides`, and `style/*` rules should be listed in `stylisticOverrides`.

#### Other config

If needed, you can pass additional flat config objects as arguments with unlimited config options.

```js
import { createConfig } from "@strv/eslint-config-web";

const config = createConfig(
  // Create Config Options
  {
    ignores: ["devops/*"],
  },
  // Flat Config object without restrictions
  {
    files: ["**/*"],
    rules: {
      "antfu/top-level-function": "off",
      "check-file/filename-blocklist": "off",
    },
  },
  {
    files: ["cypress/*"],
    plugins: {
      // integrate cypress plugin
    }
    rules: {
      // cypress specific rules
    },
  },
);

export default config;
```

### VSCode

Update the `.vscode/settings.json` on you project to include this setup:

```json
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ],
```

## License

See the [LICENSE](LICENSE) file for information.

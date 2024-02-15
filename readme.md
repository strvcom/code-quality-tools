# Code Quality Tools

[![Code Quality Checks][actions-badge]][actions-url]

> Built with ❤️ at [STRV][strv-home]

This monorepo contains shareable configurations for various coding-style/best practices/lint tools to make the configurations consistent across projects and provide easy setup mechanism. ❤️

## Available configurations

| Tool       | Package                                                                   | Version                                                                     | Description                                  |
| ---------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------- |
| Commitlint | [@strv/commitlint-config](packages/commitlint-config)                     | [![@strv/commitlint-config][cl-badge]][cl-npm]                              | Configuration for Commitlint                 |
| ESLint     | [@strv/eslint-config-node](packages/eslint-config-node)                   | [![@strv/eslint-config-node][ec-node-badge]][ec-node-npm]                   | ESlint ruleset for Node.js projects          |
| ESLint     | [@strv/eslint-config-react](packages/eslint-config-react)                 | [![@strv/eslint-config-react][ec-react-badge]][ec-react-npm]                | ESlint ruleset for React projects            |
| ESLint     | [@strv/eslint-config-typescript](packages/eslint-config-typescript)       | [![@strv/eslint-config-typescript][ec-typescript-badge]][ec-typescript-npm] | ESlint ruleset for TypeScript projects       |
| ESLint     | [@strv/eslint-config-typescript/react](packages/eslint-config-typescript) | [![@strv/eslint-config-typescript][ec-typescript-badge]][ec-typescript-npm] | ESlint ruleset for React TypeScript projects |
| ESLint     | [@strv/eslint-config-mocha](packages/eslint-config-mocha)                 | [![@strv/eslint-config-mocha][ec-mocha-badge]][ec-mocha-npm]                | ESlint ruleset for Mocha test files          |
| ESLint     | [@strv/eslint-config-graphql](packages/eslint-config-graphql)             | [![@strv/eslint-config-graphql][ec-graphql-badge]][ec-graphql-npm]          | ESlint ruleset for GraphQL and Apollo        |
| Prettier   | [@strv/prettier-config](packages/prettier-config)                         | [![@strv/prettier-config][pr-badge]][pr-npm]                                | Configuration for Prettier                   |
| Remark-CLI | [@strv/remark-config](packages/remark-config)                             | [![@strv/remark-config][rm-badge]][rm-npm]                                  | Configuration for Remark-CLI                 |
| textlint   | [@strv/textlint-rule-preset-strv](packages/textlint-rule-preset-strv)     | [![@strv/textlint-rule-preset-strv][tl-badge]][tl-npm]                      | Rule preset for textlint                     |

## Documentation

Documentation for some packages is still being worked on. Check the [documentation](documentation) directory for more info.

## License

See the [LICENSE](LICENSE) file for information.

[strv-home]: https://www.strv.com
[actions-badge]: https://github.com/strvcom/code-quality-tools/workflows/Code%20Quality%20Checks/badge.svg
[actions-url]: https://github.com/strvcom/code-quality-tools/actions?query=workflow%3A%22Code+Quality+Checks%22
[ec-node-npm]: https://npmjs.org/package/@strv/eslint-config-node
[ec-node-badge]: https://img.shields.io/npm/v/@strv/eslint-config-node.svg?style=flat-square
[ec-mocha-npm]: https://npmjs.org/package/@strv/eslint-config-mocha
[ec-mocha-badge]: https://img.shields.io/npm/v/@strv/eslint-config-mocha.svg?style=flat-square
[ec-graphql-npm]: https://npmjs.org/package/@strv/eslint-config-graphql
[ec-graphql-badge]: https://img.shields.io/npm/v/@strv/eslint-config-graphql.svg?style=flat-square
[ec-react-npm]: https://npmjs.org/package/@strv/eslint-config-react
[ec-react-badge]: https://img.shields.io/npm/v/@strv/eslint-config-react.svg?style=flat-square
[ec-typescript-npm]: https://npmjs.org/package/@strv/eslint-config-typescript
[ec-typescript-badge]: https://img.shields.io/npm/v/@strv/eslint-config-typescript.svg?style=flat-square
[cl-npm]: https://npmjs.org/package/@strv/commitlint-config
[cl-badge]: https://img.shields.io/npm/v/@strv/commitlint-config.svg?style=flat-square
[pr-npm]: https://npmjs.org/package/@strv/prettier-config
[pr-badge]: https://img.shields.io/npm/v/@strv/prettier-config.svg?style=flat-square
[rm-badge]: https://img.shields.io/npm/v/@strv/remark-config.svg?style=flat-square
[rm-npm]: https://npmjs.org/package/@strv/remark-config
[tl-badge]: https://img.shields.io/npm/v/@strv/textlint-rule-preset-strv.svg?style=flat-square
[tl-npm]: https://npmjs.org/package/@strv/textlint-rule-preset-strv

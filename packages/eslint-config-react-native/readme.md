# @strv/eslint-config-react-native

> STRV's ESLint config for React-Native projects

Suitable for linting React Native source files. This ruleset extends [`eslint-config-universe`](https://github.com/expo/expo/tree/master/packages/eslint-config-universe).

Note that this config also includes Typescript rules, as we feel strongly that Typescript should be used in all React Native projects.
By including Typescript by default we can create more consistent rule sets.

Also unlike other configs it directly includes react/styles config as we need to control the extend array order.

## Configurations

### `@strv/eslint-config-react-native`

Suitable for linting React Native projects.

To use this configuration, add this package as a dev dependency of your project:

`yarn add @strv/eslint-conig-react-native -D`

Then extend the config in your ESLint configuration:

```js
// .eslintrc.js

'use strict'

module.exports = {
  extends: [
    '@strv/eslint-config-react-native',
  ],
  parserOptions: {
    // The project field is required in order for some TS-syntax-specific rules to function at all
    // @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
    project: './tsconfig.json',
  },
}
```

## License

See the [LICENSE](LICENSE) file for information.

# @strv/eslint-config-react-native

> STRV's ESLint config for React-Native projects

Suitable for linting React Native source files. This ruleset extends `@strv/eslint-config-react`.

This rulest includes accessibility rules, based on [eslint-plugin-react-native-a11y][a11y-repo].

## Configurations

### `@strv/eslint-config-react-native`

Suitable for linting React Native projects.

### `@strv/eslint-config-react-native/optional`

Use this ruleset in conjunction with the above base ruleset. Provides additional insights into potential inconsistencies in the project. Extends `@strv/eslint-config-react/optional`.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.

## Coding styles

### `@strv/eslint-config-react-native/style`

This ruleset includes rules which deal with how the code looks like and not how it works. It helps keeping the code clean and consistent. Extends `@strv/eslint-config-react/style`. 🎨

A full configuration for a React Native project:

```js
// .eslintrc.js
"use strict";

module.exports = {
  extends: [
    "@strv/eslint-config-react-native",
    "@strv/eslint-config-react-native/optional",
    "@strv/eslint-config-react-native/style"
  ]
};
```

## License

See the [LICENSE](LICENSE) file for information.

[a11y-repo]: https://github.com/FormidableLabs/eslint-plugin-react-native-a11y

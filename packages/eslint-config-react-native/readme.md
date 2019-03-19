# @strv/eslint-config-react-native

> STRV's ESLint config for React-Native projects

Suitable for linting React Native source files. This ruleset extends `@strv/eslint-config-react` but does not extend `@strv/eslint-config-react/optional` nor `@strv/eslint-config-react/style`.

This rulest includes accessibility rules, based on [eslint-plugin-react-native-a11y][a11y-repo], by default.

A full configuration for a React Native project:

```js
// .eslintrc.js
"use strict";

module.exports = {
  extends: [
    "@strv/eslint-config-react-native",
    "@strv/eslint-config-react/optional",
    "@strv/eslint-config-react/style"
  ]
};
```

## License

See the [LICENSE](LICENSE) file for information.

[a11y-repo]: https://github.com/FormidableLabs/eslint-plugin-react-native-a11y

# @strv/eslint-config-react

> STRV's ESLint config for React projects

## Configurations

### `@strv/eslint-config-react`

Use this ruleset to configure ESLint to work with React code.

### `@strv/eslint-config-react/optional`

Use this ruleset in conjunction with the above ruleset. Provides additional insights into potential inconsistencies in the project.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.

## Coding styles

### `@strv/eslint-config-react/style`

This ruleset includes rules which deal with how the code looks like and not how it works. It helps keeping the code clean and consistent. 🎨

## Recommended ESLint config

.eslintrc.js

```js
module.exports = {
  extends: [
    '@strv/react',
    '@strv/react/optional',
    '@strv/react/style',
  ],
}
```

<!-- markdownlint-disable MD033 -->

<details>
<summary>.eslintrc or .eslintrc.json</summary>

```json
{
  "extends": [
    "@strv/react",
    "@strv/react/optional",
    "@strv/react/style"
  ]
}
```

</details>

<details>
<summary>package.json</summary>

```json
{
  "eslintConfig": {
    "extends": [
      "@strv/react",
      "@strv/react/optional",
      "@strv/react/style"
    ]
  }
}
```

</details>

## License

See the [LICENSE](LICENSE) file for information.

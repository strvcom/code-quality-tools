# `@strv/stylelint-config-styled-components`

> STRV's config for stylelint with styled-components

## Usage

```bash
# Yarn:
yarn add --dev @strv/stylelint-config

# npm:
npm install --save-dev @strv/stylelint-config
```

> We assume you are using prettier.

## Recommended stylelint config

.stylelintrc.js

```js
module.exports = {
  extends: [
    '@strv/stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
}
```

<!-- markdownlint-disable MD033 -->

<details>
<summary>.stylelintrc or .stylelintrc.json</summary>

```json
{
  "extends": [
    "@strv/stylelint-config-styled-components",
    "stylelint-config-prettier"
  ]
}
```

</details>

<details>
<summary>package.json</summary>

```json
{
  "stylelint": {
    "extends": [
      "@strv/stylelint-config-styled-components",
      "stylelint-config-prettier"
    ]
  }
}
```

</details>

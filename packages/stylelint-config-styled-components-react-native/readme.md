# `@strv/stylelint-config-styled-components-react-native`

> STRV's config for stylelint with styled-components

## Usage

```bash
# Yarn:
yarn add --dev @strv/stylelint-config-react-native

# npm:
npm install --save-dev @strv/stylelint-config-react-native
```

> We assume you are using prettier.

## Recommended stylelint config

```js
// .stylelintrc.js

'use strict'

module.exports = {
  extends: [
    '@strv/stylelint-config-styled-components-react-native',
    'stylelint-config-prettier',
  ],
}
```

<details>
<summary><i>.stylelintrc</i> or <i>.stylelintrc.json</i></summary>

```json
{
  "extends": [
    "@strv/stylelint-config-styled-components-react-native",
    "stylelint-config-prettier"
  ]
}
```

</details>

<details>
<summary><i>package.json</i></summary>

```json
{
  "stylelint": {
    "extends": [
      "@strv/stylelint-config-styled-components-react-native",
      "stylelint-config-prettier"
    ]
  }
}
```

</details>

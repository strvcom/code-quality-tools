# @strvcom/eslint-config-react

> STRV's ESLint config for React projects

## Configurations

### `@strv/eslint-config-react/v16`

Suitable for React v16. This ruleset builds on the react/v15 ruleset documented below and bumps the React version to 16 in the plugin configuration, causing some rules to recognise React 16-specific programming patterns.

### `@strv/eslint-config-react/v15`

Suitable for React v15. This ruleset configures ESLint to recognise JSX syntax and enables some rules that make the linting process more natural. Some accesssibility rules are also included to keep users happy even if they are using screen readers, braile devices or just keyboard.

### `@strv/eslint-config-react/optional`

Use this ruleset in conjunction with any of the above version-specific rulesets. Provides additional insights into potential inconsistencies in the project.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.

### `@strv/eslint-config-react/accessibility`

Use this ruleset to enable the [`a11y`][a11y-repo] rules which provide checks for writing accessible JSX components.

> This ruleset is automatically included in the `v15` and `v16` rulesets described above.

## Coding styles

### `@strv/eslint-config-react/style`

This ruleset includes rules which deal with how the code looks like and not how it works. It helps keeping the code clean and consistent. 🎨

[a11y-repo]: https://github.com/evcohen/eslint-plugin-jsx-a11y

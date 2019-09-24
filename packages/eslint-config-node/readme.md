# @strv/eslint-config-node

> STRV's ESLint config for Node.js projects

These configuration files are suitable to lint code which will run on Node.js.

## Configurations

### `@strv/eslint-config-node/v10`

Suitable for projects running on Node.js v10.

### `@strv/eslint-config-node/v12`

Suitable for projects running on Node.js v12.

## Optional configurations

### `@strv/eslint-config-node/optional`

Use this ruleset in conjunction with any of the above version-specific rulesets. Provides additional insights into potential inconsistencies in the project.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.

## Coding styles

### `@strv/eslint-config-node/style`

This ruleset includes rules which deal with how the code looks like and not how it works. It helps keeping the code clean and consistent. 🎨

## Recommended ESLint config

```js
// .eslintrc.js

'use strict'

module.exports = {
  extends: [
    '@strv/node/<v10 or v12>',
    '@strv/node/optional',
    '@strv/node/style',
    '@strv/mocha',
  ],
}
```

It is also recommended that you lint the whole project folder (ie. `npx eslint .`) instead of just
some folders (ie. `npx eslint src test`) and create an _.eslintignore_ file excluding any unwanted
lint folders. Doing so will allow new directories to be created without worrying about having to update your
tools to lint the new directory.

```ini
# .eslintignore

node_modules

# NOTE:
# The following directives are only relevant when linting the whole
# project directory, ie. running `eslint .` ⚠️

# If you compile JavaScript into some output folder, exclude it here
dist

# Highly recommended to re-include JavaScript dotfiles to lint them
# (This will cause .eslintrc.js to be linted by ESLint 🤘)
!.*.js

# Some tools use this pattern for their configuration files. Lint them!
!*.config.js
```

## License

See the [LICENSE](LICENSE) file for information.

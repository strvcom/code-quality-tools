# @strv/commitlint-config

> STRV's config for commitlint

## Configurations

### `@strv/commitlint-config` (default config)

Suitable for all projects.

### `@strv/commitlint-config/lerna`

Suitable for projects structured as a Lerna-managed monorepo. In addition to the standard conventional commits ruleset, it checks the scope to match a package name managed by Lerna.

## Usage

### Installation

```sh
npm i --dev @commitlint/cli @strv/commitlint-config
```

### Configuration

Create a _commitlint.config.js_ file with the following contents:

```js
'use strict'

module.exports = {
  extends: [
    '@strv/commitlint-config',
    // OR, for Lerna-managed monorepos:
    '@strv/commitlint-config/lerna',
  ],
}
```

### Linting

Install a git hook into _.git/hooks/commit-msg_ with the following contents:

```sh
#!/bin/sh

# This utility's configuration resides in .commitlintrc.js file.
./node_modules/.bin/commitlint < "$1"
```

If your project uses `make` you can use the following process to automatically install the git hooks upon each invocation of `make` with no target.

```makefile
# Place the above mentioned commit-msg file into your project root's utils/githooks directory and
# make it executable: chmod +x utils/githooks/commit-msg

# Git hooks to be installed into the project workspace
# This will look up all the files in utils/githooks and generate a list of targets
GITFILES := $(patsubst utils/githooks/%, .git/hooks/%, $(wildcard utils/githooks/*))

# The `githooks` dependency should be added to the first (default) target so that it will be
# executed when invoking make with no arguments
all: githooks

githooks: $(GITFILES)

# Default target for all possible git hooks
.git/hooks/%: utils/githooks/%
	cp $< $@
```

## License

See the [LICENSE](LICENSE) file for information.

# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@1.2.0...@strv/eslint-config-base@2.0.0) (2019-06-22)


### chore

* remove .es extension from recognised module extensions ([b160a65](https://github.com/strvcom/code-quality-tools/commit/b160a65))


### Features

* drop support for Node.js 6 & 8 ([4add1ff](https://github.com/strvcom/code-quality-tools/commit/4add1ff))
* enable import/no-useless-path-segments' noUselessIndex option ([dc4741f](https://github.com/strvcom/code-quality-tools/commit/dc4741f))
* explicitly mark configs as ESLint v6 compatible 🎉 ([017d975](https://github.com/strvcom/code-quality-tools/commit/017d975))


### BREAKING CHANGES

* Some rules will no longer recognise extension-less module imports pointing to files ending with .es extension.

.es was originally used as an extension with ES Modules support but the official extension for that is now .mjs. Rename your .es files to .mjs to restore any lost functionality.
* From now on, all ESLint plugins will only work on projects running Node.js 10 and above and the linter itself must be run using Node.js 10 and above.





# [1.2.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@1.1.2...@strv/eslint-config-base@1.2.0) (2019-04-30)


### Features

* improve handling of extensions across all ESLint configs ([08aa00a](https://github.com/strvcom/code-quality-tools/commit/08aa00a)), closes [#19](https://github.com/strvcom/code-quality-tools/issues/19)





## [1.1.2](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@1.1.1...@strv/eslint-config-base@1.1.2) (2019-04-09)


### Bug Fixes

* allow name exception in eslint no-shadow ([4422753](https://github.com/strvcom/code-quality-tools/commit/4422753))





## [1.1.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@1.1.0...@strv/eslint-config-base@1.1.1) (2019-04-05)

**Note:** Version bump only for package @strv/eslint-config-base





# [1.1.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@1.0.0...@strv/eslint-config-base@1.1.0) (2019-03-07)


### Bug Fixes

* **eslint-config-base:** overrides should be an array ([eb96bc7](https://github.com/strvcom/code-quality-tools/commit/eb96bc7))


### Features

* **eslint-base:** add prefer-named-capture-group ([bda87cc](https://github.com/strvcom/code-quality-tools/commit/bda87cc))





# [1.0.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@0.1.1-alpha.0...@strv/eslint-config-base@1.0.0) (2019-03-04)

**Note:** Version bump only for package @strv/eslint-config-base





## 0.1.1-alpha.0 (2019-02-07)


### Features

* implement [@strvcom](https://github.com/strvcom)/eslint-config-base 🚀 ([1626b1f](https://github.com/strvcom/code-quality-tools/commit/1626b1f))
* implement `style` rulesets for all configs 🚀 ([10c2aa0](https://github.com/strvcom/code-quality-tools/commit/10c2aa0))
* include LICENSE file ([e1eac9a](https://github.com/strvcom/code-quality-tools/commit/e1eac9a))

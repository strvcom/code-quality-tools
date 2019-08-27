# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.2](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@2.1.1...@strv/eslint-config-typescript@2.1.2) (2019-08-27)

**Note:** Version bump only for package @strv/eslint-config-typescript





## [2.1.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@2.1.0...@strv/eslint-config-typescript@2.1.1) (2019-08-27)


### Bug Fixes

* **eslint-typescript:** disable quotes rule (not yet released) ([3b58c95](https://github.com/strvcom/code-quality-tools/commit/3b58c95))





# [2.1.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@2.0.0...@strv/eslint-config-typescript@2.1.0) (2019-08-24)


### Features

* **eslint-typescript:** correctly recognise paths in tsconfig.json ([49e7ec4](https://github.com/strvcom/code-quality-tools/commit/49e7ec4))
* revisit TypeScript ruleset, upgrade to v2 ([86fadc6](https://github.com/strvcom/code-quality-tools/commit/86fadc6))





# [2.0.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.1.1...@strv/eslint-config-typescript@2.0.0) (2019-06-22)


### Features

* drop support for Node.js 6 & 8 ([4add1ff](https://github.com/strvcom/code-quality-tools/commit/4add1ff))
* explicitly mark configs as ESLint v6 compatible 🎉 ([017d975](https://github.com/strvcom/code-quality-tools/commit/017d975))
* remove interface name prefix rule from typescript ([49221f7](https://github.com/strvcom/code-quality-tools/commit/49221f7)), closes [#25](https://github.com/strvcom/code-quality-tools/issues/25)


### BREAKING CHANGES

* From now on, all ESLint plugins will only work on projects running Node.js 10 and above and the linter itself must be run using Node.js 10 and above.





## [1.1.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.1.0...@strv/eslint-config-typescript@1.1.1) (2019-05-27)

**Note:** Version bump only for package @strv/eslint-config-typescript





# [1.1.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.0.4...@strv/eslint-config-typescript@1.1.0) (2019-04-30)


### Bug Fixes

* disabled no-unused-vars ([a2781c0](https://github.com/strvcom/code-quality-tools/commit/a2781c0))


### Features

* improve handling of extensions across all ESLint configs ([08aa00a](https://github.com/strvcom/code-quality-tools/commit/08aa00a)), closes [#19](https://github.com/strvcom/code-quality-tools/issues/19)





## [1.0.4](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.0.3...@strv/eslint-config-typescript@1.0.4) (2019-04-09)


### Bug Fixes

* **eslint-typescript:** add missing optional ruleset ([00950d1](https://github.com/strvcom/code-quality-tools/commit/00950d1))
* **eslint-typescript:** declare all required deps in package.json 🤦‍♂️ ([f88ea93](https://github.com/strvcom/code-quality-tools/commit/f88ea93))





## [1.0.3](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.0.2...@strv/eslint-config-typescript@1.0.3) (2019-04-09)

**Note:** Version bump only for package @strv/eslint-config-typescript





## [1.0.2](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.0.1...@strv/eslint-config-typescript@1.0.2) (2019-04-05)


### Bug Fixes

* corrected faulty import for typescript config ([850a135](https://github.com/strvcom/code-quality-tools/commit/850a135))





## [1.0.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.0.0...@strv/eslint-config-typescript@1.0.1) (2019-03-07)

**Note:** Version bump only for package @strv/eslint-config-typescript





# [1.0.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@0.1.1-alpha.0...@strv/eslint-config-typescript@1.0.0) (2019-03-04)

**Note:** Version bump only for package @strv/eslint-config-typescript





## 0.1.1-alpha.0 (2019-02-07)


### Bug Fixes

* extend typescript ruleset from the base one ([8768ccc](https://github.com/strvcom/code-quality-tools/commit/8768ccc))


### Features

* implement [@strvcom](https://github.com/strvcom)/eslint-config-typescript 🚀 ([337a609](https://github.com/strvcom/code-quality-tools/commit/337a609))
* implement `style` rulesets for all configs 🚀 ([10c2aa0](https://github.com/strvcom/code-quality-tools/commit/10c2aa0))
* include LICENSE file ([e1eac9a](https://github.com/strvcom/code-quality-tools/commit/e1eac9a))
* resolve eslint's `extends` using standard module resolution ([9a1aa2c](https://github.com/strvcom/code-quality-tools/commit/9a1aa2c))

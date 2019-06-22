# Contributing to `code-quality-tools`

First of all, thanks for your contribution to this project! ❤️ Here are some tips how to make your contributing efforts efficient and eventually accepted & merged.

## General usage

This project uses `makefile` for managing various chores, like dependency installation, testing, linting etc. Make sure you run `make` right after you clone the repository - it will set you up with everything needed to get started. Once you are done with that, have a look at what commands (targets) are available for you to run using `make` - `make install`, `make lint` etc.

## Commit messages

All commits you make should adhere to our commit guidelines. We use [conventional commits][conventional-commits] strategy. This is later used during release phase to determine how to bump the packages' version numbers based on commit history. 🚀

## Code style

This project uses ESLint to ensure consistent coding style. Run `make lint` before you submit your code for review.

## Project structure

This project is a monorepo managed by [Lerna][lerna-home]. This means that each folder inside the [packages/](../packages) directory represents a package published to npm. The root directory also contains _package.json_ file but this is only used for local development purposes and does not represent something that is ever published to npm (you might notice that it only contains _devDependencies_ and no prod deps 🤷‍♂️).

> If you have further questions do not hesitate to open an issue and ask us! ❤️

[conventional-commits]: https://www.conventionalcommits.org
[lerna-home]: https://lernajs.io

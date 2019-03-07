# Roadmap

> This document describes what additional tools/configs could be added to this monorepo.

## New packages to add

### CLI tool

Create a CLI of some sorts to allow generating configuration for all the tools supported through this monorepo into a project. Currently, people have to manually install the packages and create the configs by hand.

> [Yeoman][yeoman-home] is a great candidate for this.

### swiftformat

Before we implement this we should consider how we will distribute non-npm packages. The current architecture of this monorepo is based around npm ecosystem.

### EditorConfig

We should be able to create a default template but since EditorConfig does not support any kind of module system it will probably be difficult to distribute this as a package and we will likely have to resort to just copying a pre-made file into projects via the aforementioned CLI tool.

### Stylelint

Linting CSS/Less is important! Let's lint them using [stylelint][stylelint-home].

[yeoman-home]: https://yeoman.io
[stylelint-home]: https://stylelint.io

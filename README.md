# STRV - Code Quality Tools

> Writing code in a consistent and effective way might be sometimes difficult. The ultimate goal of this repository is to unify coding style and provide an amazing DX.

Before we got into something real, let's consider this README as a TODO list / roadmap 😊

## CLI Tool

> Idea is simple, instead of manual adding of configuration we would like to create a CLI tool, which will add selected tools into any project.

- [ ] probably yeoman

## Formatting

> It's recommended to follow the same formatting in a project. This makes the code more consistent and readable. It also removes unnecessary discussions about whether it should be formatted in this or that way. Formatting itself doesn't have any influence on the output. The functionality is always the same. But what it makes important is developer experience. For teams working on a project, it's useful to set their preferred style of writing code. This is also very beneficial for any new member in a project since his onboarding would be much easier.

- [ ] Prettier
- [ ] swiftformat

## Linting

> Linting is the process of running a program that will analyze code for potential errors. It's essential for programming. Linting could prevent you from many bugs in production and also helps you and guides you during the development.

- [ ] ESLint
- [ ] Tslint
- [ ] stylelint

## Static type checking

> Fewer bugs in run-time, better developer experience, better onboarding of developers and
> easier to debug. For larger projects it's essential. But definitely worth it even for smaller ones.
> TODO: add a link to an article describing which one is better and why

- [ ] TypeScript
- [ ] Flow
- [ ] Reason

## Enforcing best practises

- [ ] commitlint
- [ ] husky

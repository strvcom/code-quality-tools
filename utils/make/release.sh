#!/bin/sh

set -o errexit

head=$(git rev-parse --abbrev-ref HEAD)

printf "\n=====>\tCreating release branch...\n"

git branch --force release
git checkout release

printf "\n=====>\tCreating release commit...\n"

npx lerna version

printf "\n=====>\tPushing...\n"

git push --tags --set-upstream origin release:release

printf "\n=====>\tSwitching back to previous branch...\n"

git checkout "${head}"

printf "\n=====>\tDeleting local release branch...\n"

git branch --delete release

printf "\n=====>\tRelease in progress: https://github.com/strvcom/code-quality-tools/actions\n"

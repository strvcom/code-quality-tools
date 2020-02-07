#!/bin/sh

set -o errexit

printf "\n=====>\tCreating release branch...\n"

git branch --force release

printf "\n=====>\tPushing...\n"

git push --set-upstream origin release:release

printf "\n=====>\tDeleting local release branch...\n"

git branch --delete release

printf "\n=====>\tRelease in progress: https://github.com/strvcom/code-quality-tools/actions\n"

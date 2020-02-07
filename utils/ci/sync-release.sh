#!/bin/sh

set -o errexit

printf "\n=====>\tFetching current master...\n"

# Ensure we are merging the release into current branch tips to avoid pushes being rejected
git fetch --no-tags --depth=50 origin master

printf "\n=====>\tMerging to master...\n"

git checkout master
git merge release

# Print the repo status after merging, for troubleshooting purposes
git status
git log --oneline HEAD~10..HEAD

printf "\n=====>\tPushing master...\n"

git push origin master

printf "\n=====>\tDeleting release branch...\n"
git push origin :release

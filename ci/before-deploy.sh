#!/usr/bin/env bash

set -o errexit
set -o pipefail

# Authorise npm for publishing
cat <<NPMRC >> ~/.npmrc
@strv:registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
NPMRC

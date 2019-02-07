# Defining shell is necessary in order to modify PATH
SHELL := sh
export PATH := bin/:node_modules/.bin/:$(PATH)
export NODE_OPTIONS := --trace-deprecation

# Modify these variables in local.mk to add flags to the commands, ie.
# NPM_FLAGS += --prefer-offline
NPM_FLAGS :=
ESLINT_FLAGS :=
REMARK_FLAGS :=

# Git hooks to be installed into the project workspace
GITFILES := $(patsubst utils/githooks/%, .git/hooks/%, $(wildcard utils/githooks/*))

# Since this is the first target, Make will do this when make is invoked without arguments
all: install githooks


# TASK DEFINITIONS

githooks: $(GITFILES)

install: node_modules $(GITFILES)

lint: force install
	eslint --cache --report-unused-disable-directives $(ESLINT_FLAGS) .
	remark --quiet $(REMARK_FLAGS) .

outdated:
	npm outdated || true
	lerna exec "npm outdated || true"

unlock: pristine
	rm -f package-lock.json packages/*/package-lock.json
	touch package.json

clean:
	rm -rf {.nyc_output,coverage,docs}
	find . -name '*.log' -print -delete

pristine: clean
	rm -rf node_modules packages/*/node_modules

version:
	lerna version $(LERNA_FLAGS)

# GENERIC TARGETS

node_modules: package.json
	npm ci $(NPM_FLAGS) && lerna bootstrap && touch node_modules

# Default target for all possible git hooks
.git/hooks/%: utils/githooks/%
	cp $< $@


# Use this prerequisite to force the target to never be treated as "up to date"
.PHONY: force

	# If this file exists, load it and add it to this makefile.
	# Useful for defining per-developer variables or make targets. This file should not be under
	# version control. ⚠️
-include local.mk

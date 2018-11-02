# Defining shell is necessary in order to modify PATH
SHELL := sh
export PATH := bin/:node_modules/.bin/:$(PATH)
export NODE_OPTIONS := --trace-deprecation

# Modify these variables in local.mk to add flags to the commands, ie.
# F_NPM += --prefer-offline
F_NPM :=
F_ESLINT :=
F_REMARK :=

GITFILES := $(patsubst utils/githooks/%, .git/hooks/%, $(wildcard utils/githooks/*))

# Do this when make is invoked without targets
all: install githooks


# GENERIC TARGETS

node_modules: package.json
	npm install $(F_NPM) && lerna bootstrap && touch node_modules

# Default target for all possible git hooks
.git/hooks/%: utils/githooks/%
	cp $< $@


# TASK DEFINITIONS

githooks: $(GITFILES)

install: node_modules $(GITFILES)

lint: force install
	eslint --cache --report-unused-disable-directives $(F_ESLINT) .
	remark --quiet $(F_REMARK) .

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

.PHONY: force

-include local.mk

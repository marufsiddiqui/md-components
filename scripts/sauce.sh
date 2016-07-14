#!/usr/bin/env bash

# Exit on error. Append || true if you expect an error.
set -o errexit
# Exit on error inside any functions or subshells.
set -o errtrace
# Do not allow use of undefined vars. Use ${VAR:-} to use an undefined VAR
set -o nounset
# Catch the error in case mysqldump fails (but gzip succeeds) in `mysqldump |gzip`
set -o pipefail

# from https://gist.github.com/domenic/ec8b0fc8ab45f39403dd

# update sauce labs job id in README.md
# sed -i 's:saucelabs.com/beta/tests/[^\)]*:saucelabs.com/beta/tests/'$SAUCE_JOB_ID':' README.md

# add and commit changes to readme
## git config user.name "travis ci"
## git config user.email "noreply@travis.com"
git add .
git commit -m "travis-ci: update sauce labs job id in readme"

# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
# https://docs.travis-ci.com/user/deployment/custom/
eval "ssh-agent -s"
chmod 600 hbm-react-components-travis.pub
ssh-add hbm-react-components-travis.pub
git push origin master

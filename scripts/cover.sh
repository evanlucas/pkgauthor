#!/bin/bash

rm -rf lib-cov
jscoverage lib lib-cov
PKGAUTHOR_COV=1 mocha -R html-cov test/*.js > coverage.html
PKGAUTHOR_COV=1 mocha -R json-cov test/*.js > coverage.json

# pkgauthor

[![Build Status](https://travis-ci.org/evanlucas/pkgauthor.svg)](https://travis-ci.org/evanlucas/pkgauthor)
[![Coverage Status](https://coveralls.io/repos/evanlucas/pkgauthor/badge.svg?branch=master&service=github)](https://coveralls.io/github/evanlucas/pkgauthor?branch=master)

parses the author field of a package.json

*Note: only works on iojs and node v4+. To use with an older version of node,
install `pkgauthor@1`.*

## Install

```bash
$ npm install --save pkgauthor
```

## Usage

### pkgauthor(Object)

```js
var author = require('pkgauthor')
var input = {
    name: 'Evan Lucas'
  , email: 'evanlucas@me.com'
  , url: 'http://curapps.com'
}
var out = author(input)
console.log(out)
// => {
// =>   name: 'Evan Lucas',
// =>   email: 'evanlucas@me.com'
// =>   url: 'http://curapps.com'
// => }
```

### pkgauthor(String)

```js
var author = require('pkgauthor')
var input = 'Evan Lucas <evanlucas@me.com> (http://curapps.com)'
var out = author(input)
console.log(out)
// => {
// =>   name: 'Evan Lucas',
// =>   email: 'evanlucas@me.com'
// =>   url: 'http://curapps.com'
// => }
```

## Tests

```bash
$ npm test
```

## Coverage

```bash
$ npm run cover
```

## License

MIT

# pkgauthor

parses the author field of a package.json

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

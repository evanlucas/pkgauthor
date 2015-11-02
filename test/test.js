'use strict'

const author = require('../')
const test = require('tap').test

test('string', function(t) {
  const input = 'Evan Lucas'
  const out = author(input)
  t.type(out, 'object')
  t.equal(out.name, 'Evan Lucas')
  t.equal(out.email, '')
  t.equal(out.url, '')

  const input2 = 'Evan Lucas <evanlucas@me.com>'
  const out2 = author(input2)
  t.type(out2, 'object')
  t.equal(out2.name, 'Evan Lucas')
  t.equal(out2.email, 'evanlucas@me.com')
  t.equal(out2.url, '')

  const input3 = 'Evan Lucas <>'
  const out3 = author(input3)
  t.type(out3, 'object')
  t.equal(out3.name, 'Evan Lucas')
  t.equal(out3.email, '')
  t.equal(out3.url, '')

  const input4 = 'Evan Lucas <evanlucas@me.com> (http://curapps.com)'
  const out4 = author(input4)
  t.type(out4, 'object')
  t.equal(out4.name, 'Evan Lucas')
  t.equal(out4.email, 'evanlucas@me.com')
  t.equal(out4.url, 'http://curapps.com')

  t.end()
})

test('object', function(t) {
  const input = {
    name: 'Evan Lucas'
  }
  const out = author(input)
  t.type(out, 'object')
  t.equal(out.name, 'Evan Lucas')
  t.equal(out.email, '')
  t.equal(out.url, '')

  const input2 = {
    name: 'Evan Lucas'
  , email: 'evanlucas@me.com'
  }
  const out2 = author(input2)
  t.type(out2, 'object')
  t.equal(out2.name, 'Evan Lucas')
  t.equal(out2.email, 'evanlucas@me.com')
  t.equal(out2.url, '')

  const input3 = {
    name: 'Evan Lucas'
  , email: 'evanlucas@me.com'
  , url: 'http://curapps.com'
  }
  const out3 = author(input3)
  t.type(out3, 'object')
  t.equal(out3.name, 'Evan Lucas')
  t.equal(out3.email, 'evanlucas@me.com')
  t.equal(out3.url, 'http://curapps.com')

  t.end()
})

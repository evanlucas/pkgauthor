var author = require('../')
  , should = require('should')

describe('pkgauthor', function() {
  describe('string', function() {
    it('should work with just a name', function() {
      var input = 'Evan Lucas'
      var out = author(input)
      out.should.be.type('object')
      out.should.have.property('name', 'Evan Lucas')
      out.should.have.property('email', '')
      out.should.have.property('url', '')
    })

    it('should work with name and email', function() {
      var input = 'Evan Lucas <evanlucas@me.com>'
      var out = author(input)
      out.should.be.type('object')
      out.should.have.property('name', 'Evan Lucas')
      out.should.have.property('email', 'evanlucas@me.com')
      out.should.have.property('url', '')
    })

    it('should work with name, email, and url', function() {
      var input = 'Evan Lucas <evanlucas@me.com> (http://curapps.com)'
      var out = author(input)
      out.should.be.type('object')
      out.should.have.property('name', 'Evan Lucas')
      out.should.have.property('email', 'evanlucas@me.com')
      out.should.have.property('url', 'http://curapps.com')
    })

    it('should work with empty email', function() {
      var input = 'Evan Lucas <>'
      var out = author(input)
      out.should.be.type('object')
      out.should.have.property('name', 'Evan Lucas')
      out.should.have.property('email', '')
      out.should.have.property('url', '')
    })
  })

  describe('object', function() {
    it('should work with just a name', function() {
      var input = { name: 'Evan Lucas' }
      var out = author(input)
      out.should.have.property('name', 'Evan Lucas')
      out.should.have.property('email', '')
      out.should.have.property('url', '')
    })
    it('should work with name and email', function() {
      var input = {
          name: 'Evan Lucas'
        , email: 'evanlucas@me.com'
      }
      var out = author(input)
      out.should.be.type('object')
      out.should.have.property('name', 'Evan Lucas')
      out.should.have.property('email', 'evanlucas@me.com')
      out.should.have.property('url', '')
    })

    it('should work with name, email, and url', function() {
      var input = {
          name: 'Evan Lucas'
        , email: 'evanlucas@me.com'
        , url: 'http://curapps.com'
      }
      var out = author(input)
      out.should.be.type('object')
      out.should.have.property('name', 'Evan Lucas')
      out.should.have.property('email', 'evanlucas@me.com')
      out.should.have.property('url', 'http://curapps.com')
    })
  })
})

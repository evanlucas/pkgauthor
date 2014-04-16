module.exports = function(input) {
  var current = ''
    , out = {
        name: ''
      , email: ''
      , url: ''
    }
    , inEmail = false
    , inUrl = false
  if ('string' === typeof input) {
    for (var i=0, len = input.length; i<len; i++) {
      var c = input[i]
      if (c === '<') {
        inEmail = true
        continue
      } else if (c === '>') {
        inEmail = false
        continue
      } else if (c === '(') {
        inUrl = true
        continue
      } else if (c === ')') {
        inUrl = false
        continue
      } else {
        if (inEmail) out.email += c
        else if (inUrl) out.url += c
        else out.name += c
      }
    }
    out.name = out.name.trim()
    out.email = out.email.trim()
    out.url = out.url.trim()
  } else if ('object' === typeof input) {
    out.name = input.name || ''
    out.email = input.email || ''
    out.url = input.url || ''
  }
  return out
}

module.exports = process.env.PKGAUTHOR_COV
  ? require('./lib-cov')
  : require('./lib')

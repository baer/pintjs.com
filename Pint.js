module.exports = {
  build: {
    runners: [
      require('./build/mangle.js')
    ]
  }
};
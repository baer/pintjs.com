module.exports = {
  build: {
    runners: [
      require('./build/css.js'),
      require('./build/javascript.js'),
      require('./build/static.js')
    ]
  },
};
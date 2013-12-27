module.exports = {

  environments: [
    "development",
    "production",
    "staging"
  ],

  build: {
    initialize: {},

    runners: [
      require('./build/css.js'),
      require('./build/javascript.js'),
      require('./build/static.js')
    ],

    finalize: {}
  },

  release: {
    initialize: {},
    runners: [],
    finalize: {}
  }
};
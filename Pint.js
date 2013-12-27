module.exports = {

  environments: [
    "development",
    "production",
    "staging"
  ],

  build: {
    initialize: {},

    runners: [
      require('./build/mangle.js')
    ],

    finalize: {}
  },

  release: {
    initialize: {},
    runners: [],
    finalize: {}
  }
};
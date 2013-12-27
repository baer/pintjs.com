module.exports = {   
  name: 'mangle',

  build: [
    'uglify'
  ],

  config: {
    uglify: {
      dist: {
        files: {
          'dist/test.min.js': ['./src/test.js']
        }
      }
    }
  },

  // TODO
  dependsOn: {},
  initialize: {}, 
  "build.production": [],
  deploy: [],
  "deploy.production": [],
};
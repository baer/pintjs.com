module.exports = {   
  name: 'css',

  build: [
    'cssmin'
  ],

  config: {
    cssmin: {
      combine: {
        files: {
          './dist/css/main.min.css': [
            './src/css/bootstrap.css',
            './src/css/bootstrap-theme.css',
            './src/css/main.css'
          ]
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
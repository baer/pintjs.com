module.exports = {   
  name: "mangle",

  config: {
    uglify: {
      dist: {
        files: {
          'dist/test.min.js': ['./src/test.js']
        }
      }
    }
  }
};
'use strict';

module.exports = function(grunt) {

  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    'bower_server': {
      develop: {
        options: {
          base: '..',
          release: false
        }
      }
    },

    jsdoc: {
      api: {
        src: ['index.js', 'src/**/*.js'],
        options: {
          destination: 'doc'
        }
      }
    },

    jshint: {
      files: ['index.js', 'src/**/*.js'],
      options: {
        jshintrc: true
      }
    },

    clean: {
      doc: ['doc']
    }

  });

  grunt.registerTask('doc', ['clean:doc', 'jsdoc']);
  grunt.registerTask('server', ['bower_server']);

};

'use strict';

/*global describe, before, it*/

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('mooc:app', function () {

  describe('all defaults', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .inDir(path.join(os.tmpdir(), './temp-test-app'))
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([
        'app',
        'lib',
        'mod',
        'theme',
        '.editorconfig',
        '.jshintrc',
        'config.rb',
        'Gruntfile.js',
        'HISTORY.md',
        'README.md',
        'bower.json',
        'package.json'
      ]);

      assert.fileContent([
        ['package.json', /"name": "temp-test-app"/],
        ['package.json', /"version": "0\.0\.0"/]
      ]);
    });
  });

  describe('with name and version', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .inDir(path.join(os.tmpdir(), './temp-test-app-2'))
        .withPrompt({
          appname: 'test',
          version: '0.0.1'
        })
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([
        'app',
        'lib',
        'mod',
        'theme',
        '.editorconfig',
        '.jshintrc',
        'Gruntfile.js',
        'README.md',
        'config.rb',
        'HISTORY.md',
        'bower.json',
        'package.json'
      ]);

      assert.fileContent([
        ['package.json', /"name": "test"/],
        ['package.json', /"version": "0\.0\.1"/]
      ]);
    });
  });

});

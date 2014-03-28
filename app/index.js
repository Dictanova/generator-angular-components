'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var AngularComponentsGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic AngularComponents generator.'));

    var prompts = [{
      name: 'blogName',
      message: 'What do you want to call your blog?'
    }];

    this.prompt(prompts, function (props) {
      this.blogName = props.blogName;

      done();
    }.bind(this));
  },

  app: function () {
    // this.mkdir('src');

    this.directory('src', 'src');
    this.directory('template', 'template');
    this.directory('misc', 'misc');
    this.copy('karma.conf.js', 'karma.conf.js');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.copy('package.json', 'package.json');
    this.copy('bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = AngularComponentsGenerator;
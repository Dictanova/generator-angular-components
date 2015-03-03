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
      name: 'libraryName',
      message: 'What do you want to call your library?',
      default: 'My Angular components library'
    }, {
      name: 'libraryPrefix',
      message: 'What prefix do you want for your library?',
      default: 'ui.mylib'
    }];

    this.prompt(prompts, function (props) {
      this.libraryName = props.libraryName;
      this.libraryPrefix = props.libraryPrefix;
      done();
    }.bind(this));
  },

  app: function () {
    this.directory('src', 'src');
    this.directory('template', 'template');
    this.directory('misc', 'misc');
    this.template('misc/demo/_index.html', 'misc/demo/index.html');
    this.template('misc/demo/assets/_app.js', 'misc/demo/assets/app.js');
    this.copy('karma.conf.js', 'karma.conf.js');
    this.template('_Gruntfile.js', 'Gruntfile.js');
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');
  }
});

module.exports = AngularComponentsGenerator;
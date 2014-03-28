'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ComponentGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the component subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
    this.directory('_component_src', 'src/tabs');
    this.directory('_component_template', 'template/tabs');

    // this.copy('somefile.js', 'somefile.js');
  }
});

module.exports = ComponentGenerator;
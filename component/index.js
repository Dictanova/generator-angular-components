'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ComponentGenerator = yeoman.generators.NamedBase.extend({
  init: function() {
    console.log('You called the component subgenerator with the argument ' + this.name + '.');

    // this.cameledName = this._.camelize(this.name);

    try {
      this.libraryName = require(path.join(process.cwd(), 'package.json'))._ngPrefix;
    } catch (e) {
      this.libraryName = path.basename(process.cwd());
    }
    this.componentId = this._.slugify(this.name);
    this.componentName = this._.humanize(this.name);
    this.componentModuleName = this.libraryName + '.' + this.componentId;
    this.classedName = this._.classify(this.name);


  },

  files: function() {
    this.componentSrcDir = 'src/' + this.componentId;
    this.componentTplDir = 'template/' + this.componentId;
    this.mkdir(this.componentSrcDir)
    this.mkdir(this.componentTplDir)
    this.directory('_component_src', this.componentSrcDir);
    this.directory('_component_template', this.componentTplDir);

    // this.copy('somefile.js', 'somefile.js');
  }
});

module.exports = ComponentGenerator;
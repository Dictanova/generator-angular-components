'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ComponentGenerator = yeoman.generators.NamedBase.extend({
  init: function() {
    console.log('You called the component subgenerator with the argument ' + this.name + '.');

    try {
      this.libraryName = require(path.join(process.cwd(), 'package.json'))._ngPrefix;
    } catch (e) {
      this.libraryName = path.basename(process.cwd());
    }
    this.componentId = this._.slugify(this.name);
    this.componentName = this._.humanize(this.name);
    this.componentModuleName = this.libraryName + '.' + this.componentId;
    this.classedName = this._.classify(this.name);
    this.camelizedName = this._.camelize(this.name);


  },

  files: function() {
    this.componentSrcDir = 'src/' + this.componentId;
    this.componentTplDir = 'template/' + this.componentId;
    //Src directory
    this.mkdir(this.componentSrcDir)
    
    this.mkdir(this.componentSrcDir + '/test')
    this.template('_component_src/test/_component.spec.js', this.componentSrcDir + '/test/' + this.componentId + '.spec.js')
    
    this.mkdir(this.componentSrcDir + '/docs')
    this.template('_component_src/docs/_demo.html', this.componentSrcDir + '/docs/demo.html')
    this.template('_component_src/docs/_demo.js', this.componentSrcDir + '/docs/demo.js')
    this.template('_component_src/docs/_readme.md', this.componentSrcDir + '/docs/readme.md')
    
    //Template directory
    this.mkdir(this.componentTplDir)
    this.template('_component_template/_template.html', this.componentTplDir + '/' + this.componentId + '.html')
    // this.directory('_component_template', this.componentTplDir);
    this.template('_component_src/_component.js', this.componentSrcDir + '/' + this.componentId + '.js')

  }
});

module.exports = ComponentGenerator;
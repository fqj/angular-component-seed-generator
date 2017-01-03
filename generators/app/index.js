'use strict';

const Generator = require('yeoman-generator');
const globby = require('globby');

/*
mkdirp(this.props.name);
this.destinationRoot(this.destinationPath(this.props.name));
*/


module.exports = class extends Generator {

    initializing() {
        this.props = {};
    }

    prompting() {

        return this.prompt([
            {
                type    : 'input',
                name    : 'componentName',
                message : 'component name',
                default : 'my-custom'
            },

            {
                type    : 'input',
                name    : 'description',
                message : 'brief description',
                default : 'sample description for element'
            },

            {
                type    : 'input',
                name    : 'repositoryUrl',
                message : 'repository url',
                default : 'http://github.com/my-domain/my-element'
            },

            {
                type    : 'input',
                name    : 'catalogHomepage',
                message : 'element\'s catalog homepage',
                default : 'http://github.com/my-domain/my-element'
            },


        ]).then(answers => {

            this.props.componentName = answers.componentName;
            this.props.componentClassName = this.props.componentName.replace(/-*([a-z0-9]+)-*/g, function(match, p1){ return p1.substr(0,1).toUpperCase() + p1.substr(1); }) + 'Component';
            this.props.componentDescription = answers.description;
            this.props.repositoryUrl = answers.repositoryUrl;
            this.props.catalogHomepage = answers.catalogHomepage;

        });


    }

    writing() {

        // Non-template files
        return globby([this.templatePath() + '/**/*.*', '!' + this.templatePath() + '/**/*_TEMPL.*']).then(paths => {

            paths.forEach(file => {
                const relativeSrc = file.replace(this.templatePath() + '/', '').replace(/_COMPONENT-NAME/g, this.props.componentName);
                this.fs.copy(file, this.destinationPath(relativeSrc));
            });

            // Templates
            return globby([this.templatePath() + '/**/*_TEMPL.*']).then(paths => {

                paths.forEach(file => {
                    const relativeSrc = file.replace(this.templatePath() + '/', '').replace(/_TEMPL/g, '').replace(/_COMPONENT-NAME/g, this.props.componentName);
                    this.fs.copyTpl(file, this.destinationPath(relativeSrc), this.props);
                });

            });

        })



    }

    install() {
        this.installDependencies({ npm: false, bower: false, yarn: true });
    }

}

/*

module.exports = generators.Base.extend({

  prompting: function() {

     // globby(['*', '!** /*_TEMPL.*']).then(paths => {
         console.log(paths);
          //=> ['unicorn', 'rainbow']
      });


      return this.prompt([
          {
    	      type    : 'input',
    	      name    : 'componentName',
    	      message : 'component name',
    	      default : 'my-component'
          },

          {
    	      type    : 'input',
    	      name    : 'description',
    	      message : 'brief description',
    	      default : 'sample description for element'
          },

          {
    	      type    : 'input',
    	      name    : 'repositoryUrl',
    	      message : 'repository url',
    	      default : 'http://github.com/my-domain/my-element'
          },

          {
              type    : 'input',
              name    : 'catalogHomepage',
              message : 'element\'s catalog homepage',
              default : 'http://github.com/my-domain/my-element'
          },


        ]).then(function (answers) {

            this.componentName = answers.componentName;
            this.elementDescription = answers.description;
            this.repositoryUrl = answers.repositoryUrl;
            this.catalogHomepage = answers.catalogHomepage;

	    }.bind(this));

  },

  writing: function(){

      let srcTemplates = '** /*_TEMPL.*';

      globby(['*', '** /!cake']).then(paths => {
          console.log(paths);
          //=> ['unicorn', 'rainbow']
      });

      this.files.forEach(function(file) {

          file = (typeof file !== 'object') ? { src: file, dest: file } : file;

          this.fs.copy(
              this.templatePath(file.src),
              this.destinationPath(file.dest)
          );

      }.bind(this));

      this.templates.forEach(function(template){

          template = (typeof template !== 'object') ? { src: template, rename: false } : template;

          var dest = template.rename ? template.src.replace('element', this.elementName) : template.src;

          this.fs.copyTpl(
              this.templatePath(template.src),
              this.destinationPath(dest),
              {
                  elementName: this.elementName,
                  elementClassName: (this.elementName.replace(/-*([a-z0-9]+)-* /g, function(match, p1){ return p1.substr(0,1).toUpperCase() + p1.substr(1); })),
                  elementDescription: this.elementDescription,
                  repositoryUrl: this.repositoryUrl,
                  catalogHomepage: this.catalogHomepage
              }
          );

      }.bind(this));

  },

  install: function() {

      this.yarnInstall();

  }


});

*/
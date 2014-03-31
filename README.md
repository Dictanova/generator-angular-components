# Angular Components generator

> This generator helps you scaffloding a nice Angular components library. It is largely inspired from the awesome [UI Bootstrap](http://angular-ui.github.io/bootstrap/) project.

## Getting Started

To install generator-angular-components from npm, run:

```
$ npm install -g generator-angular-components
```

### Scaffold the project

Finally, initiate the generator:

```
$ yo angular-components
     _-----_
    |       |
    |--(o)--|   .--------------------------.
   `---------´  |    Welcome to Yeoman,    |
    ( _´U`_ )   |   ladies and gentlemen!  |
    /___A___\   '__________________________'
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

You're using the fantastic AngularComponents generator.
[?] What do you want to call your library? Antoine's library
[?] What prefix do you want for your library? (ui.mylib) ui.ant

```

Build the project : 
```
grunt
....
cd dist
python -m SimpleHTTPServer 8004
```

If you look into the dist folder, you should see 5 files and one folder

//TODO : change the prefix name of the built library (replace 'ui-bootstrap-' by 'library-name-')  

```
assets/   //The assets for the documentation
index.html  //The documentation page
ui-bootstrap-0.0.0.js // Your library 
ui-bootstrap-0.0.0.min.js // Your library minified
ui-bootstrap-tpls-0.0.0.js // Your library withe the templates
ui-bootstrap-tpls-0.0.0.min.js // Your library with the templates, minified

```


Browse on [http://localhost:8004/](http://localhost:8004/), yout should see something like this : 
![](http://i.imgur.com/6U36M0Xl.png?1)


### Create a component


It feels a little empty in here, let's create a new component !

```
yo angular-components:component "my super awesome component"

You called the component subgenerator with the argument my super awesome component.
   create src/my-super-awesome-component/test/my-super-awesome-component.spec.js
   create src/my-super-awesome-component/docs/demo.html
   create src/my-super-awesome-component/docs/demo.js
   create src/my-super-awesome-component/docs/readme.md
   create template/my-super-awesome-component/my-super-awesome-component.html
   create src/my-super-awesome-component/my-super-awesome-component.js

```

Build the project again : 
```
grunt
```
You should now see this : 

![](http://i.imgur.com/EStUFJSl.png)

That's better!
You can now implement your component by editing the files in `src/my-super-awesome-component/`.

## License

MIT

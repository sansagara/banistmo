# Banistmo: A challenge

An *Angular* App. Meant as a display of some frontend programming skills. This depends on the companion Restful Backend App, which is [here](https://github.com/sansagara/banistmo-backend).
This is already deployed to Heroku for convenience. It can be found on [banistmo.herokuapp.com](http://banistmo.herokuapp.com/login)

An index of the whole set of resources is available on the backend [banistmo-back.herokuapp.com](http://banistmo-back.herokuapp.com/index.html)

## Running Locally

1. Go to project folder and install dependencies:
 ```bash
 npm install
 ```
 
2. Launch development server, and open `localhost:4200` in your browser:
 ```bash
 npm start
 ```
 

## Deploying to Heroku

The scripts located on `package.json` will build and start a server on Heroku for you.

```sh
$ heroku create
$ git push heroku master

$ heroku open
```
or instead, click on this button to deploy automatically:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://github.com/sansagara/banistmo)

## Login
You can login with any account created on the Backend. It will generate a Token for the session.
To create a new account for login, go to the [Backend Admin Page](http://banistmo-back.herokuapp.com/admin/)

The superadmin username and password for the Live deployment is `Banistmo:Banistmo123`

## Project structure

```
dist/                        compiled version
docs/                        project docs and coding guides
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

#### Libraries

- [Angular](https://angular.io)
- [Bootstrap 4](https://v4-alpha.getbootstrap.com)
- [Font Awesome](http://fontawesome.io)
- [RxJS](http://reactivex.io/rxjs)
- [ng-bootsrap](https://ng-bootstrap.github.io/)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)
- [NG2 Charts](https://github.com/valor-software/ng2-charts)

#### Coding guides

- [Angular](docs/coding-guides/angular.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [Sass](docs/coding-guides/sass.md)
- [HTML](docs/coding-guides/html.md)
- [Unit tests](docs/coding-guides/unit-tests.md)
- [End-to-end tests](docs/coding-guides/e2e-tests.md)

#### Other documentation

- [I18n guide](docs/i18n.md)
- [Working behind a corporate proxy](docs/corporate-proxy.md)
- [Updating dependencies and tools](docs/updating.md)
- [Using a backend proxy for development](docs/backend-proxy.md)
- [Browser routing](docs/routing.md)


## About
#### Author
[Leonel Atencio](http://blog.leonelatencio.com)
#### Version
1.0
#### License
Do What The F*ck You Want To Public License (wtfpl)

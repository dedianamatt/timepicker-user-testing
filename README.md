## Introduction

This project facilitates user testing of preferences for entering and/or selecting time in order to fill out timecards. There are three categories of tests:
Category 1 identifies how keyboard input affects usability on desktop devices.
Category 2 identifies how keyboard input affects usability on touch devices.
Category 3 compares three kinds of 'pickers' on touch devices.

Category 1 tests are meant to be executed on devices with an external keyboard, while categories 2 and 3 are meant to be executed on touch devices.

In development.

Project was initialized using yeoman node-express generator.

### Getting Started
Here is a post on <a href="http://www.lukelarsen.com/post/02-installing-node" target="_blank">installing Node</a> if you need it.

Once Node is installed you'll have access to npm so you can use this to install Yeoman and Grunt.


```
$ npm install -g yo grunt-cli
```

The -g means that you are installing globally.

You'll also need to install <a href="http://rubyinstaller.org/" target="_blank">Ruby</a> and <a href="http://sass-lang.com/install" target="_blank">Sass</a>.
Note that Symantec will probably quarantine the Ruby installer because it doesn't have 'enough' downloads. You can override the quarantine.

Once you've downloaded this project, run this command to start working on it.

```
$ grunt workon
```

This starts the server, launches the project in your editor, opens the project in a browser, and starts watching the project for changes.

<h4>LiveReload</h4>

To enable LiveRelaod you'll need to install the Chrome extension.

<a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei" target="_blank">Live Reload Chrome extension</a>

Once installed and the project is running just turn on the Chrome Extension.


<h4>Restarting the server</h4>

When you edit files that need the server to restart for you to see the changes, most of the time Grunt will just restart it for you. There are times when it gets stuck though. If this happens you can run this command to start it back up without reopening the project in your editor and browser.

```
$ grunt restart
```

<h4>Generate a production version of your app</h4>

Once your app is ready for production run this to generate a production build of your project.

```
$ grunt build
```

To test to see if the app is using the production version of the app you can shut down the server and start it again in production mode.

```
$ NODE_ENV=production node app.js
```

If it all works you are ready to deploy to Heroku. The Procfile at the root directory is for Heroku. Without it Heroku will choke. To deploy to Heroku you will need a <a href="http://heroku.com" target="_blank">Heorku account</a> and the <a href="https://toolbelt.heroku.com/" target="_blank">Heroku Toolbelt</a> installed.

Once that is setup use Git to commit and then Heroku to create and deploy.

```
$ git init
$ git add .
$ git commit -m 'init'
```

Create the app
```
heroku create
```

Deploy your code
```
git push heroku master
```

To ensure that Heroku is setup to use your production settings you'll need to run this:

```
$ heroku config:set NODE_ENV=production
```

Open the project
```
heroku open
```

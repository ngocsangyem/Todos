# Web-starter-kit

## What new in 2.0.0@beta?

- Split task
- Auto import sass file when create a new component
- Auto delete page in build floder
- Optimize js using webpack

## Overview

Web Starter Kit is an opinionated boilerplate for web development. Tools for building a great experience across many devices. A solid starting point for both professionals and newcomers to the industry.

## Browser Support

At present, i officially aim to support the last two versions of the following browsers:

* Chrome
* Edge
* Firefox
* Safari
* Internet Explorer

This is not to say that Web Starter Kit cannot be used in browsers older than those reflected, but merely that my focus will be on ensuring our layouts work great in the above.

## Prerequisites

### [Node.js](https://nodejs.org)

Bring up a terminal and type `node --version`.
Node should respond with a version at or above 4.0.x.
If you need to install Node, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

### [Gulp](http://gulpjs.com)

Bring up a terminal and type `gulp --version`.
If Gulp is installed it should return a version number at or above 3.9.x.
If you need to install/upgrade Gulp, open up a terminal and type in the following:

```sh
$ npm install --global gulp
```

*This will install Gulp globally. Depending on your user account, you may need to [configure your system](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) to install packages globally without administrative privileges.*

**In this project i use Gulp version 4.0**

### Local dependencies

Next, install the local dependencies Web Starter Kit requires:

```sh
$ npm install
```
or
```sh
$ npm i
```
That's it! You should now have everything needed to use the Web Starter Kit.

You may also want to get used to some of the [commands](#commands) available.

## Commands

There are many commands available to help you build and test sites. Here are a few highlights to get started with.

### Watch For Changes & Automatically Refresh Across Devices

## Build & Optimize


Build and optimize the current project, ready for deployment.
This includes linting as well as image, script, stylesheet and HTML optimization and minification.
Also, a [browsersync](https://browsersync.io/)
script will be automatically generated, which will take care of precaching your sites' resources.


```sh
$ npm start
```

## Serve the Fully Built & Optimized Site

```sh
$ npm build
```

`npm build` task creates the `production/` folder in the root of the project with **dist files only**. It will **help you** to **create clear** instances of code for the **production** or **further implementation**.

## Structure
updating...

## Troubleshooting
If you find yourself running into issues during installation or running the tools,  open an issue. I would be happy to discuss how they can be solved.

## License

The MIT License (MIT)

Copyright (c) 2019 by ngocsangyem

## Idea
* I have consulted some sources of yeoman / [Webapp](https://github.com/yeoman/generator-webapp)
* This project base on my teacher's idea / [Bao Nguyen](https://github.com/baonguyenyam)

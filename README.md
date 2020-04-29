[![Build Status](https://travis-ci.com/Arquisoft/viade_en3b1.svg?branch=master)](https://travis-ci.com/Arquisoft/viade_en3b1)
[![codecov](https://codecov.io/gh/Arquisoft/viade_en3b1/branch/master/graph/badge.svg)](https://codecov.io/gh/Arquisoft/viade_en3b1)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f5df55b29fc54c189382e35c742730d9)](https://www.codacy.com/gh/Arquisoft/viade_en3b1?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Arquisoft/viade_en3b1&amp;utm_campaign=Badge_Grade)
[![Version Badge](https://img.shields.io/badge/Version-1.1-<COLOR>.svg)](https://arquisoft.github.io/viade_en3b1)

# VIADE EN3B1

This project is an assignment for the [Software Architecture course](https://arquisoft.github.io/) following [these requirements](https://labra.solid.community/public/SoftwareArchitecture/AssignmentDescription/).

The app is [**deployed here**](https://arquisoft.github.io/viade_en3b1/) and also contains a [technical documentation](https://arquisoft.github.io/viade_en3b1/docs).


- [VIADE EN3B1](#viade-en3b1)
  - [Developers](#developers)
  - [Installing and launching the app locally](#installing-and-launching-the-app-locally)
  - [Building the docs locally](#building-the-docs-locally)
  - [Running tests locally](#running-tests-locally)
    - [React tests by Jest and Enzyme](#react-tests-by-jest-and-enzyme)
    - [Cucumber-Puppeteer tests](#cucumber-puppeteer-tests)
  - [Relevant packages](#relevant-packages)

## Developers
*  [Pablo Cañal Suárez](https://github.com/PabloCanalSuarez)


## Installing and launching the app locally 

You’ll need to have [Node](https://nodejs.org/) 8.16.0 or Node 10.16.0 or later version on your local development machine.

First, to install the dependencies:

```
npm install
```
And then, run:

```
npm start
```

## Building the docs locally

In order to create the docs you'll need [asciidoctor](https://asciidoctor.org/) and in case you use [plantuml](https://plantuml.com/) drawings, you'll also need [openjdk 8](https://openjdk.java.net/).

Once they have been installed, the docs can be generated with:

```
npm run docs
```

## Running tests locally

### React tests by Jest and Enzyme

To run these tests you can simply do:
```
npm test
```

### Cucumber-Puppeteer tests

This set of tests is run by executing:
```
npm run test:e2e
```

In case of error related to Chromium, please do:
```
npm install puppeteer
```
In order to install Chromium browser.

## Relevant packages
- [React JS](https://github.com/facebook/react) for development.
- [Solid](https://github.com/solid) for decentralized.
- [Material-UI](https://github.com/mui-org/material-ui) and [Material-UI Dropzone](https://github.com/Yuvaleros/material-ui-dropzone) for UI design.
- [Leaflet](https://github.com/Leaflet/Leaflet) for maps.
- [React Jest](https://github.com/facebook/jest) and [Enzyme](https://github.com/enzymejs/enzyme) for general testing.
- [Cucumber](https://github.com/cucumber/cucumber) and [Puppeteer](https://github.com/puppeteer/puppeteer) for end-to-end testing.
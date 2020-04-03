[![Build Status](https://travis-ci.com/Arquisoft/viade_en3b1.svg?branch=master)](https://travis-ci.com/Arquisoft/viade_en3b1)
[![codecov](https://codecov.io/gh/Arquisoft/viade_en3b1/branch/master/graph/badge.svg)](https://codecov.io/gh/Arquisoft/viade_en3b1)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f5df55b29fc54c189382e35c742730d9)](https://www.codacy.com/gh/Arquisoft/viade_en3b1?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Arquisoft/viade_en3b1&amp;utm_campaign=Badge_Grade)

# VIADE EN3B1

This project is an assignment for the [Software Architecture course](https://arquisoft.github.io/) following [these requirements](https://labra.solid.community/public/SoftwareArchitecture/AssignmentDescription/).

The app is deployed [here](https://arquisoft.github.io/viade_en3b1/) which also contains a [technical documentation](https://arquisoft.github.io/viade_en3b1/docs).

More information about how this project has been setup is available [in the wiki](https://github.com/Arquisoft/viade_en3b/wiki).

## Developers
*  [Pablo Cañal Suárez](https://github.com/PabloCanalSuarez)

## Building and running the web app locally

You’ll need to have [Node](https://nodejs.org/) 8.16.0 or Node 10.16.0 or later version on your local development machine.

Run:

```
npm start
```

## Building the docs locally

In order to create the docs you'll need [asciidoctor](https://asciidoctor.org/) and in case you use [plantuml](https://plantuml.com/) drawings, you'll also need [openjdk 8](https://openjdk.java.net/).

Once they have been installed, the docs can be generated with:

```
npm run docs
```

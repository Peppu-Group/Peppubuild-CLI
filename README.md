[![npm version](https://badge.fury.io/js/peppubuild.svg)](https://www.npmjs.com/package/peppubuild)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Peppubuild-CLI

> This is the official CLI for [peppubuild](). If you want to bootstrap your own self-hosted version of Peppubuild speedily without using our cross-platform desktop application, you're in the right place.

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

- [Project Name](#project-name)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Serving the app](#serving-the-app)
  - [Contributing](#contributing)
  - [More Information](#more-information)
  - [Built With](#built-with)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with installing Peppubuild locally on your local machine:

```sh
$ npm i -g peppubuild
```

Now, run the Peppubuild command in your terminal.

```sh
$ peppubuild
```

You'll be asked the question below:

> Do you want to install a self-hosted version of peppubuild?

Respond with 'y' and hit the enter button, a Peppubuild folder will be created.

## Usage

### Serving the app

Navigate to the peppubuild folder that was just created.

```sh
$ cd peppubuild
```

Next run the install command.

```sh
npm install
```

Finally, we can serve the application using the command below:

```sh
npm run start
```

## More Information

If you need more information on how to use Peppubuild, checkout the [Peppubuild Repository]().

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Built With

* NodeJS 

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Peppu-Group/Peppubuild-CLI/tags).

## Authors

* **Ukpai Ugochi** - *Initial work* - [Ugochi](https://github.com/hannydevelop)

See also the list of [contributors](https://github.com/Peppu-Group/Peppubuild-CLI/contributors) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Andrea SonnY

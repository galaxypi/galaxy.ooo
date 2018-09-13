<p align="center">

  <h3 align="center">Galaxy website and web app</h3>

  <p align="center">
    Galaxy is a blockchain agnostic node network and protocol offering services to decentralized platforms
    <br/>
    <a href="http://galaxy.ooo"><strong>galaxy.ooo</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/galaxypi/galaxy.ooo/issues/new?template=feature_request.md">Request feature</a>
    &nbsp;&middot;&nbsp;
    <a href="https://github.com/galaxypi/">Explore</a>
    &nbsp;&middot;&nbsp;
    <a href="https://github.com/galaxypi/galaxy.ooo/issues/new?template=bug_report.md">
    Report bug</a>
    &nbsp;&middot;&nbsp;
    <a href="https://discord.gg/36K9nan">Chat</a>
    <br/>
    <br/>
    <a href="https://twitter.com/intent/follow?screen_name=galaxypilab">
      <img src="https://img.shields.io/twitter/url/https/twitter.com/galaxypilab.svg?style=social&label=Follow%20%40galaxypilab&logo=twitter" alt="follow on Twitter">
    </a>
    &nbsp;&middot;&nbsp;
    <a href="https://github.com/galaxypi/galaxy.ooo/stargazers">
      <img src="https://img.shields.io/github/stars/galaxypi/galaxy.ooo.svg?style=social&label=Star&maxAge=2592000" alt="Star Repo">
    </a>
  </p>
</p>

<br/>

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Table of contents

- [Status](#status)
- [Quick start](#quick-start)
- [Bug report](#bug-report)
- [Feature requests](#feature-requests)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [Community](#community)
- [Repository maintainers](#repository-maintainers)
- [License](#license)

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Status

- Introduces [Galaxy UI](/docs/CONTRIBUTING.md#galaxy-ui). Galaxy's base theme for the [Bootstrap](http://getbootstrap.com/) front-end framework
- Now utilizes the [npm](https://www.npmjs.com/) package manager. Previously, [Yarn](https://yarnpkg.com/) package manager was required to run `galaxy.ooo` due to constraints from Heroku's [Create React App Buildpack](https://elements.heroku.com/buildpacks/nhutphuongit/create-react-app-buildpack)
- Setup CircleCI build test & automated CircleCI build status badge
    - Build passing...
- Implemented Sass theming with full automated build, CSS minification, auto-watch and update, and start script

[![Galaxy.ooo version](https://img.shields.io/badge/galaxy.ooo-v0.2.1-brightgreen.svg?colorA=212121&colorB=00BB00)](https://github.com/galaxypi/galaxy.ooo)
[![Galaxy UI](https://img.shields.io/badge/Galaxy_UI-v0.1.0-brightgreen.svg?colorA=212121&colorB=00BB00)](/docs/CONTRIBUTING.md#galaxy-ui)
[![Galaxy Chat](https://img.shields.io/badge/Galaxy_Chat-Discord-purple.svg?colorA=212121&colorB=7289da)](https://discord.gg/36K9nan)

[![CircleCI](https://circleci.com/gh/galaxypi/galaxy.ooo.svg?style=svg&circle-token=ad1f788b1717844c9749ce3eca75baef20e82b63)](https://circleci.com/gh/galaxypi/galaxy.ooo)
[![ajv version](https://img.shields.io/badge/ajv-v6.5.1-blue.svg?colorA=212121&colorB=007BFF)](https://github.com/epoberezkin/ajv)
[![Bootstrap version](https://img.shields.io/badge/Bootstrap-v4.1.3-blue.svg?colorA=212121&colorB=007BFF)](http://getbootstrap.com/)
[![jQuery version](https://img.shields.io/badge/jQuery-v3.3.1-blue.svg?colorA=212121&colorB=007BFF)](https://jquery.com/)
[![Node Sass Chokidar version](https://img.shields.io/badge/Node_Sass_Chokidar-v1.3.3-blue.svg?colorA=212121&colorB=007BFF)](https://github.com/michaelwayman/node-sass-chokidar)
[![npm version](https://img.shields.io/badge/npm-v6.4.0-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/)
[![npm Run All version](https://img.shields.io/badge/npm_Run_All-v4.1.3-blue.svg?colorA=212121&colorB=007BFF)](https://github.com/mysticatea/npm-run-all)
[![Popper version](https://img.shields.io/badge/Popper.js-v1.14.4-blue.svg?colorA=212121&colorB=007BFF)](https://popper.js.org/)
[![React version](https://img.shields.io/badge/React-v16.4.1-blue.svg?colorA=212121&colorB=007BFF)](https://reactjs.org/)
[![ReactZDom version](https://img.shields.io/badge/ReactDom-v16.4.1-blue.svg?colorA=212121&colorB=007BFF)](https://reactjs.org/docs/react-dom.html)
[![React Scripts version](https://img.shields.io/badge/React_Scripts-v1.1.4-blue.svg?colorA=212121&colorB=007BFF)](https://reactjs.org/)
[![px-rem-reference version](https://img.shields.io/badge/PX--REM_Reference-v1.2.2-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/package/px-rem-reference)

```
galaxy.ooo
├── .circleci
│  └── config.yml
├── .github
│  └── ISSUE_TEMPLATE
│  │  └── bug_report.md
│  │  └── custom-issue.md
│  │  └── feature_request.md
├── .gitignore
├── docs
│  └── CONTRIBUTING.md
│  └── getting-started.md
├── node_modules (1,069 items)
├── package-lock.json
├── package.json
├── public
│  └── favicon.ico
│  └── index.html
│  └── manifest.json
├── README.md
└── src
   └── App.js
   └── App.test.js
   └── components
   │  └── Header.js
   └── index.js
   └── logo.svg
   └── registerServiceWorker.js
   └── styles
      └── App.css
      └── Galaxy.css
      └── Galaxy.scss
      └── index.css
```

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Quick start

Quickly start by cloning the repository to your local machine

```
$ git clone git@github.com:galaxypi/galaxy.ooo.git
```

Install [`npm`](https://www.npmjs.com/get-npm). `npm` is installed and comes bundled with [Node.js](https://nodejs.org/en/download/package-manager/)

```
$ brew install node
```

Add dependencies

```
$ npm install
```

Start the local client side server and run the app. The app will automatically open your web browser and navigate to http://localhost:3000/ for you

```
$ npm start
```

For detailed instructions on on installing and running Galaxy.ooo, please visit the [Getting started](/docs/getting-started.md) page.

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Bug report

Found a bug or issue? Please first read the [issue & bug guidelines](/docs/CONTRIBUTING.md#using-the-issue-tracker)
and search for existing and closed issues. If your problem is not addressed yet, [please report a bug](https://github.com/galaxypi/galaxy.ooo/issues/new?template=bug_report.md).

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Feature requests

Feature requests are highly encouraged. We want to hear from you on what
you'd like to see and/or how you'd like to utilize or access the Galaxy node
network.

<a href="https://github.com/galaxypi/galaxy.ooo/issues/new?template=feature_request.md">› Request a feature</a>

When submitting a feature request, take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince community members of the merits of this feature. Please
provide as much detail and context as possible, providing relevant links, prior
art, or live demos whenever possible.

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Contributing

Please read through our [contributing guidelines](/docs/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you
must include relevant unit tests. All code should conform to the [Code Guidelines](/docs/CONTRIBUTING.md#code-guidelines).

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Roadmap

View the detailed Galaxy Roadmap to see what's coming next.

[› Galaxy Roadmap page](https://github.com/galaxypi/galaxy/blob/master/docs/roadmap.md) _(galaxypi/galaxy/docs/roadmap.md)_

Galaxy's mission is to become the world's largest blockchain agnostic, always on, node network and protocol offering services to decentralized platforms.

We are looking to accomplish this by executing the following;

- [ ] Building and maintaining the Galaxy blockchain and protocol.
- [ ] Designing and building beautiful modified tiny computers (Raspberry Pi) 
      as Galaxy nodes.
- [ ] Providing an exceptional API, SDK and marketplace experience that allows
      developers to easily access and build on top of the Galaxy node network. 
- [ ] A simple and easy node owner interface and incentive program to 
      incentivize node owners.
- [ ] Provide the best experience for developers to quickly deploy node 
      modules, apps and services to decentralized platforms.

View the detailed [Galaxy Roadmap page](https://github.com/galaxypi/galaxy/blob/master/docs/roadmap.md) _(galaxypi/galaxy/docs/roadmap.md)_ to learn more about project overview, goals, execution to date, milestones, current tech stack, and more...

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Community

Get updates on Galaxy's development and chat with the project maintainers and community members.

- Follow [@galaxypilab on Twitter](https://twitter.com/galaxypilab).
- Join the official [Galaxy Discord](https://discord.gg/36K9nan) chat room.

[› Galaxy Community page](https://github.com/galaxypi/galaxy/blob/master/docs/community.md) _(galaxypi/galaxy/docs/community.md)_

For more details on how to get involved in the Galaxy Community visit the [Galaxy Community page](https://github.com/galaxypi/galaxy/blob/master/docs/community.md) _(galaxypi/galaxy/docs/community.md)_ and learn more about events, roadmap, weekly & daily scrum, past weekly community scrum calls, and more...

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Repository maintainers

**Guy Lepage**, _Product, Design & Development_
- <https://twitter.com/guylepage3>
- <https://github.com/guylepage3>

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## License

By contributing your code, you agree to license your contribution under the [
MIT License](LICENSE.md).

<div align="right">
  <a href="https://opensource.guide/how-to-contribute/#why-contribute-to-open-source">
    <img src="https://badges.frapsoft.com/os/v3/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/" alt="Open Source">
  </a>
</div>

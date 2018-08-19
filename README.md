<p align="center">
  <a href="http://galaxy.ooo">
    <img src="https://media.githubusercontent.com/media/galaxypi/galaxy-design/master/social/social-galaxy-logo-rounded.png" width=72 height=72>
  </a>

  <h3 align="center">Galaxy website and web app</h3>

  <p align="center">
    Galaxy is a network of decentralized nodes offering services for
    decentralized platforms
    <br/>
    <a href="http://galaxy.ooo"><strong>galaxy.ooo</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/galaxypi/galaxy/issues/new?template=feature_request.md">Request feature</a>
    &nbsp;&middot;&nbsp;
    <a href="https://github.com/galaxypi/">Explore</a>
    &nbsp;&middot;&nbsp;
    <a href="https://github.com/galaxypi/galaxy.ooo/issues/new?template=issues.md">
    Report bug</a>
    &nbsp;&middot;&nbsp;
    <a href="https://discord.gg/36K9nan">Chat</a>
    <br/>
    <br/>
    <a href="https://twitter.com/intent/follow?screen_name=galaxypilab">
      <img src="https://img.shields.io/twitter/url/https/twitter.com/galaxypilab.svg?style=social&label=Follow%20%40galaxypilab&logo=twitter" alt="follow on Twitter">
    </a>
    &nbsp;&middot;&nbsp;
    <a href="https://github.com/galaxypi/galaxy-website/stargazers">
      <img src="https://img.shields.io/github/stars/galaxypi/galaxy-website.svg?style=social&label=Star&maxAge=2592000" alt="Star Repo">
    </a>
  </p>
</p>

<br/>

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Table of contents

- [Status](#status)
- [Quick start](#quick-start)
- [Using the issue tracker](#using-the-issue-tracker)
- [Bug reports](#bug-reports)
- [Feature requests](#feature-requests)
- [Pull requests](#pull-requests)
- [Code guidelines](#code-guidelines)
- [Repository maintainers](#repository-maintainers)
- [License](#license)

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Status

- Build - passing
- Changed `create-react-app` name to `client`
- Resolved build failures

[![Galaxy.ooo version](https://img.shields.io/badge/galaxy.ooo-v0.1.0-brightgreen.svg?colorA=212121&colorB=00BB00)](https://github.com/galaxypi/galaxy.ooo)

[![Build Status](https://img.shields.io/badge/Build_Status-Passing-brightgreen.svg?colorA=212121&colorB=00BB00)](https://github.com/galaxypi/galaxy.ooo)
[![AJV version](https://img.shields.io/badge/AJV-v6.5.1-blue.svg?colorA=212121&colorB=007BFF)](https://github.com/epoberezkin/ajv)
[![Bootstrap version](https://img.shields.io/badge/Bootstrap-v4.0.0--alpha.6-blue.svg?colorA=212121&colorB=FF0000)](http://getbootstrap.com/)
[![jQuery version](https://img.shields.io/badge/jQuery-v3.3.1-blue.svg?colorA=212121&colorB=007BFF)](https://jquery.com/)
[![Popper version](https://img.shields.io/badge/Popper.js-v1.14.3-blue.svg?colorA=212121&colorB=007BFF)](https://popper.js.org/)
[![React version](https://img.shields.io/badge/React-v16.4.1-blue.svg?colorA=212121&colorB=007BFF)](https://reactjs.org/)
[![ReactZDom version](https://img.shields.io/badge/ReactDom-v16.4.1-blue.svg?colorA=212121&colorB=007BFF)](https://reactjs.org/docs/react-dom.html)
[![React Scripts version](https://img.shields.io/badge/React_Scripts-v1.1.4-blue.svg?colorA=212121&colorB=007BFF)](https://reactjs.org/)
[![px-rem-reference version](https://img.shields.io/badge/PX--REM_Reference-v1.2.2-blue.svg?colorA=212121&colorB=007BFF)](https://github.com/guylepage3/px-rem-reference)

```
galaxy.ooo
├── .gitignore
├── docs
│  └── getting-started.md
├── package.json
├── public
│  └── favicon.ico
│  └── index.html
│  └── manifest.json
├── README.md
└── src
│  └── App.css
│  └── App.js
│  └── App.scss
│  └── App.test.js
│  └── components
│  │  └── Header.js
│  └── index.css
│  └── index.js
│  └── logo.svg
│  └── registerServiceWorker.js
└── yarn.lock

```

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Quick start

Quickly start by cloning the repository to your local machine

```
$ git clone git@github.com:galaxypi/galaxy.ooo.git
```

Install [`yarn`](https://yarnpkg.com/lang/en/docs/install/)

```
$ brew install yarn
```

Add dependencies

```
$ yarn add
```

Start the local client side server and run the app. The app will automatically open your web browser and navigate to http://localhost:3000/ for you

```
$ yarn start
```

For detailed instructions on on installing and running Galaxy.ooo, please visit the [Getting started](/docs/getting-started.md) page.

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Finding opportunities to contribute

Visit our issue tracker:

- [Issue Tracker](https://github.com/galaxypi/galaxy.ooo/issues)

If the ticket your interested in is being worked, feel free to provide feedback.

Otherwise, leave a comment addressing one of the [repo maintainers](#repository-maintainers) to get
the conversation started.

Whether you are a veteran programmer, beginner programmer, or don't program at all, we
are positive you will find a place to helping us build a decentralized internet!

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Using the issue tracker

The [issue tracker](https://github.com/galaxypi/galaxy.ooo/issues) is the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests) and [submitting pull requests](#pull-requests), but please respect the following
restrictions:

* Please **do not** use the issue tracker for personal support requests.  Please use [Galaxy Discord](https://discord.gg/36K9nan) chat app as it is a better places to get help.

* Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.

* Please **do not** post comments consisting solely of "+1" or ":thumbsup:". Use [GitHub's "reactions" feature](https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments) instead. We reserve the right to delete comments which violate this rule.

### When reporting a bug, include:

* Operating system and version (Windows, Mac OS X, Android, iOS, Win10 Mobile)

* Browser and version (Chrome, Firefox, Safari, IE, MS Edge, Opera 15+, Android Browser)

* Reduced test cases and potential fixes using [JS Bin](https://jsbin.com)

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository. Good bug reports are extremely helpful, so thanks!

Guidelines for bug reports:

1. **Validate and lint your code** &mdash; [validate your HTML](https://html5.validator.nu) and [lint your HTML](https://github.com/twbs/bootlint) to ensure your problem isn't caused by a simple error in your own code.

2. **Use the GitHub issue search** &mdash; [Search for duplicate or closed issues]().

3. **Check if the issue has been fixed** &mdash; try to reproduce it using the latest `master`, `develop` or development branch in the repository.

4. **Isolate the problem** &mdash; ideally create a [reduced test case](https://css-tricks.com/reduced-test-cases/) and a live example. [This JS Bin](https://jsbin.com/lolome/edit?html,output) is a helpful template.

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? Do other browsers show the bug differently? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).

<div align="right">
    <b><a href="#galaxy-website-and-web-app">^ back to top</a></b>
</div>


## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to *you* to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible, providing relevant links, prior art, or live demos whenever possible.

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

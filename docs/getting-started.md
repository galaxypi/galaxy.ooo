## Getting started

The following instructions will assist you in the process of getting galaxy.ooo up and running on your local machine. This is a detailed guide on cloning the galaxy.ooo repository, installing yarn, installing dependencies and running the app on your local machine via the client server.

### Clone the repository

First you'll need to navigate to the directory where you normally store your websites and code by changing directories.

An example of where you store your code could be in a directory called `sites`. On a Mac the `sites` directory could be placed in your `Home` user directory. The folder structure would then look like this...

```
Home
├── Applications
├── Desktop
├── Documents
├── Downloads
├── Movies
├── Music
├── Pictures
├── Public
└── sites
   └── [example site 1]
   └── [example site 2]
   └── [example site 3]
```

If you do not have a `sites` folder created, create one by running

```
mkdr sites
```

Navigate into the newly created `sites` directory by running...

```
cd sites/
```

Clone the Galaxy.ooo repository by running the following...

```
git clone git@github.com:galaxypi/galaxy.ooo.git
```

Next navigate into the `galaxy.ooo` directory by running the change directory `cd` command.

```
cd galaxy.ooo
```

### Install npm

[`npm`](https://www.npmjs.com/get-npm) package manager is installed and comes bundled with [Node.js](https://nodejs.org/en/download/package-manager/)

Install [Node.js](https://nodejs.org/en/download/package-manager/)

```
brew install node
```

### Install dependencies

To install `dependencies` run

```
npm install
```

### Run the app

```
npm start
```

Runs the app in development mode and opens [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

To quit the server run the command `control + C`.

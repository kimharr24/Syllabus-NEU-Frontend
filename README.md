# Development
## General
This project requires NodeJS (<a href="https://nodejs.org/en/download/">latest</a> version recommended). Before starting, make sure that the current working directory is the root of this project and not one directory above it (i.e. `arbitrary/path/.../Syllabus-NEU`). Run 
```
npm install
```
in both the root directory and `/backend` to install the dependencies. To start the React front-end application, run 
```
npm run dev
```
in a terminal from the root directory. Open up a second terminal and also run
```
npm run transpile-api
npm run start-api
```
from the root directory to activate the Express back-end server. The entire back-end is written in TypeScript, which is not interpretable by NodeJS. To resolve this issue, `npm run transpile-api` transpiles the TypeScript code into CommonJS and outputs the transpiled code to `/backend/api/transpiled-api/`.

## Linting
This project uses <a href="https://www.npmjs.com/package/eslint-config-airbnb-typescript">eslint-config-airbnb-typescript</a> and <a href="https://prettier.io/">prettier</a> for enforcing code style and formatting. For integration with git, <a href="https://typicode.github.io/husky/#/">husky</a> is used for automating code formatting before every commit and works in tandem with <a href="https://github.com/conventional-changelog/commitlint">commitlint</a> to lint commit messages according to the <a href="https://www.conventionalcommits.org/en/v1.0.0/">conventional commit format</a>. The complete list of configurable commit message rules can be found <a href="https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md">here</a>. To get started, run the following in the root directory
```
npm install
npm run prepare
```
and download the eslint and prettier extensions for Visual Studio Code. 

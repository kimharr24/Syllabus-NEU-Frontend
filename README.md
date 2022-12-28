# Development
## Linting
This project uses <a href="https://www.npmjs.com/package/eslint-config-airbnb-typescript">eslint-config-airbnb-typescript</a> and <a href="https://prettier.io/">prettier</a> for enforcing code style and formatting. For integration with git, <a href="https://typicode.github.io/husky/#/">husky</a> is used for automating code formatting before every commit and works in tandem with <a href="https://github.com/conventional-changelog/commitlint">commitlint</a> to lint commit messages according to the <a href="https://www.conventionalcommits.org/en/v1.0.0/">conventional commit format</a>. The complete list of configurable commit message rules can be found <a href="https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md">here</a>. To get started, run the following in the root directory
```
npm install
npm run prepare
```
and download the eslint and prettier extensions for Visual Studio Code. 

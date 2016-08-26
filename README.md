# devTool
Some tools for dev

### pre-commit
A git pre-commit hook with nodeJs;
More info about git hook, please see this document: <a href="https://git-scm.com/book/it/v2/Customizing-Git-Git-Hooks">Git Hooks</a>

#### file structure

    - pre-commit // git hook script
    - pre-commit-installer.js // the pre-commit hook installer

#### installation
This command depens on nodeJs, check your node environment:

    node -v

run this command at the root of project(after `git init`)

    curl https://raw.githubusercontent.com/Deguang/devTool/master/pre-commit-installer.js | node

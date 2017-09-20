# devTool
Some tools for dev

### pre-commit
A git pre-commit hook with nodeJs;
More info about git hook, please see this document: [Git Hooks](https://git-scm.com/book/it/v2/Customizing-Git-Git-Hooks)

#### file structure

```
├── pre-commit                  // git hook script
└── pre-commit-installer.js     // the pre-commit hook installer
```


#### support check

* Merge conflicts, forbidden commit;
* scss compile error, forbidden commit;
* use elementUi, forbidden commit;

#### installation
This command depens on nodeJs, check your node environment:

```bash
node -v
```

run this command at the root of project(after `git init`)

```bash
curl https://raw.githubusercontent.com/Deguang/devTool/master/pre-commit-installer.js | node
```

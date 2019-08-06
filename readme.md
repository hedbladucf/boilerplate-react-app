#### status and log
* git init --> Create a new git repo
* git status --> View changes to your project
* git log --> View recent commits

#### add remote
* git remote add origin <insertFromGit> --> adds remote origin to repo

#### stage & commit
* git add . --> add all files
* git add <file> --> add file to staging area
* git commit --> creates a new commit with files from staging area
* git commit -m "insert message" --> commit with message
* git commit --amend -m "new messag" --> amend commit message
* git commit -a -m "insert message" --> adds files and commits with message
* git commit -am --> same as above

#### create new branch
* git checkout -b feature|bugfix/US1234 --> create new feature or bugfix with name US1234

#### delete branch
* git branch -D feature|bugfix/US1234 --> deletes feature or bugfix US1234 locally
* git push origin :feature|bugfix/US1234 --> pushes delete of feature or bugfix

#### revert
* git checkout -b revert/US1234 --> creates revert with name
* git revert <commitHash> --> reverts commit by providing hash
* git push origin revert/US1234 --> pushes revert
  
#### delete git recursively from project
* rm -rf .git --> run to destroy git repo

#### test commands
* npm test --> run tests
* npm test -- --watch --> run tests with watch flag
* npm test -- -u --> run tests and update snapshots

#### node
* node server/server.js --> serve application using express

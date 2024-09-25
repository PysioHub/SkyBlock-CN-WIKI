# SkyBlock-CN-WIKI Contributing Guide

Hi! We're really excited that you are interested in contributing to SkyBlock-CN-WIKI .

## Pull Request Guidelines

- Checkout a topic branch from the relevant branch, e.g. `main`, and merge back against that branch.

- If adding a new feature:

  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing bug:

  - Provide a detailed description of the bug in the PR. Live demo preferred.

- It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.


## Development Setup

You will need [yarn](https://yarnpkg.com/)

After cloning the repo, run:

```sh
# install the dependencies of the project
$ yarn install
```

### Run VitPress In Dev

```sh
$ yarn docs:dev
```
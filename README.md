# vue3-vite-components-library-template

This tamplete repo is build with using vue3 sfc with setup script component example. Project use storybook , vite, tailwind, typescript.

## Urls (change these to actual library urls and remove this text)

- [Master https://when-is-hosted-change-to-real-url/](https://when-is-hosted-change-to-real-url/)

# Development Guide

## Setup

1. Clone the Repostory using
   [Github Desktop](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)
2. Run `npm i` or `npm install` to install npm's mentioned in [package.json](package.json)

## Story Book Testing

1. Run storybook using `npm run storybook`
   - Alternatively you can download the npm extension, select `enable run from folder` in the settings, select npm script in the explorer to easily activate the npm scripts.
2. To close storybook testing use `ctrl C` then `Y` within the terminal to shut down correctly

## Run Tailwind server

1. npm run tailwindWatch - that run tailwind server and compile new css on css change.

### NPM Scrits Available

- [storybook] - Run storybook server pn localhost:6006
- [storybook:build] - Run storybook build process
- [build:lib] - Bilding library in to ./library
- [uploadLibToClaudinary] - Uploading ./library current version
- [versionUpdate] - update version.ts file base on package.json version number
- [deleteLibFromClaudinary] - delete library from caludinary , deleted version can't be current version. To delete version use format '--bv x.x.x'
- [getLatestLibraryVersion] - display lastest updated library with url link
- [deploy:lib] - !Important run this command only when want deploy new library to claudinary and alwayst with npm version. This script check library , add github tag with new version, push bump verion
  commit and upload library to claudinary
- [tailwindWatch] - run tailwind server to watch and compile any css changes.
- [prettier:check] - run prettier check on all files without modifying
- [prettier:write] - run prettier and overwrite files
- [lint](https://cli.vuejs.org/core-plugins/eslint.html#injected-commands) - scans for syntax errors, wrong use of [Vue.js Directives](https://v3.vuejs.org/api/directives.html) and violation for
  [Vue.js Style Guide](https://v3.vuejs.org/style-guide/)
- [lint:fix] - run lint and auto fix problems if possible

### Lint

This project use [vue3-strongly-recommended](https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability-for-vue-js-3-x)

To run linting run lint to check linting or lint:fix to fix issues

### Prettier

Have project settings file

## Contribute

use Conventional Commits https://www.conventionalcommits.org/en/v1.0.0/ and tool is documented here http://commitizen.github.io/cz-cli/

## Deploy

## TO-DO

- [ ] remove bootstrap
- [ ] include testing ( jest/cypress)
- [ ] setup rollup to clean library folder on build

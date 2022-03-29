# vue3-vite-components-library-template

This tamplete repo is build with using vue3 sfc with setup script component example. Project use storybook , vite, tailwind, typescript.

## Urls (change these to actual library urls and remove this text)

- [Master https://when-is-hosted-change-to-real-url/](https://when-is-hosted-change-to-real-url/)

# Development Guide

## Setup

1. Clone the Repostory using
   [Github Desktop](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)
2. Run `npm i` or `npm install` to install npm's mentioned in [package.json](package.json)
3. edit [.npmrc](.npmrc) to your git name.
4. edit  [package.json](package.json)
   - name of package (that needs to be your @githubName/repoName )
   - library name , this will be your global library namespace after include script
5. Change claudinary settings file in gulpt task and replace with your claudianry credentials

## Story Book Testing

1. Run storybook using `npm run storybook`
   - Alternatively you can download the npm extension, select `enable run from folder` in the settings, select npm script in the explorer to easily activate the npm scripts.
2. To close storybook testing use `ctrl C` then `Y` within the terminal to shut down correctly

## Run Tailwind server

1. npm run tailwindWatch - that run tailwind server and compile new css on css change.

### NPM Scrits Available

- [storybook] - Run storybook server pn localhost:6006
- [storybook:build] - Run storybook build process
- [build:lib] - Bilding library in to ./dist
- [build:pkg] - Bilding package in to ./dist
- [uploadLibToClaudinary] - Uploading ./dist current version
- [versionUpdate] - update version.ts file base on package.json version number
- [deleteLibFromClaudinary] - delete library from caludinary , deleted version can't be current version. To delete version use format '--bv x.x.x'
- [getLatestLibraryVersion] - display lastest updated library with url link
- [deploy:lib] - !Important run this command only when want deploy new library to claudinary.
- [deploy:pkg] - !Important run this command only when want deploy new packages to github packages.
- [preversion] - Hapens after version patch, update version.ts file , create bump version commit and sent github tags.
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

 ### Library - run deploy:lib to deploy library minify version file in to claudinary
 ### Packages - run deploy:pkg to publish new package in to github packages , go to github and release new package from github tags.
 
## Install Package from github packages

In your project create file .npmrc in root folder.
Edit this file with fallowing information

//npm.pkg.github.com/:_authToken=yourauthenticationithubtoken
@yourgithubaccount:registry=https://npm.pkg.github.com/


## TO-DO
- [ ] Generate types
- [ ] Import css in to template
- [ ] remove bootstrap
- [ ] include testing ( jest/cypress)

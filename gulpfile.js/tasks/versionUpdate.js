/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');
const gitrev = require('git-rev-sync');
const replace = require('gulp-replace');
const version = require('../../package.json').version;

const sourcePath = './src/';
const todayDate = new Date();

/**
 * Update version in AppVersion.ts file from package.json
 */

function versionUpdate() {
  const branch = gitrev.short() + '.' + gitrev.branch();
  const pathToVersion = sourcePath;
  return gulp
    .src([pathToVersion + 'version.ts'])
    .pipe(replace(/releasedOn[:]\s?('.*')/g, "releasedOn: '" + todayDate.toUTCString() + "'"))
    .pipe(replace(/branch[:]\s?('.*')/g, "branch: '" + branch + "'"))
    .pipe(replace(/version[:]\s?('.*')/g, "version: '" + version + "'"))
    .pipe(gulp.dest(pathToVersion));
}

const versionUpdateTask = gulp.series(versionUpdate);
exports.versionUpdate = versionUpdateTask;

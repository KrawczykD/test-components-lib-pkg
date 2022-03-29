/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');
const version = require('../../../package.json').version;
const cloudinary = require('cloudinary').v2;

// Settings for Release
var releaseSettings = require('../../shared/releasesettings');
var getCloudinarySearchExpression = require('../../shared/getCloudinaryFilterExpression').getCloudinaryFilterExpression;

var fileList = releaseSettings.getFilesByVersion(version);
const cloudinaryFolder = releaseSettings.cdnPath;
const cloudinaryConfig = releaseSettings.cdnConfig;

cloudinary.config(cloudinaryConfig);

/**
 * Get and print in console lastates uploaded version https address
 */

async function cloduinaryGetLastestFiles() {
  let cloudinarySearchExpression = getCloudinarySearchExpression(fileList, cloudinaryFolder);
  let cdnfiles = await cloudinary.search
    .expression(cloudinarySearchExpression)
    .sort_by('created_at', 'desc')
    .execute()
    .then((result) => {
      console.log('Total Found:', result.total_count);
      for (let i = 0; i < result.resources.length; i++) {
        var currentFile = result.resources[i];
        console.log('File: ', currentFile.secure_url);
        //console.log(currentFile);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  //console.log(cdnfiles.resources.length);
  return cdnfiles;
}

const viewVersionFiles = gulp.series(cloduinaryGetLastestFiles);
exports.getfiles = viewVersionFiles;

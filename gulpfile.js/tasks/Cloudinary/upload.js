/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');
const cloudinary = require('cloudinary').v2;
const version = require('../../../package.json').version;

// Settings for Release to Cloudinary
var releaseSettings = require('../../shared/releasesettings');

var filesArray = releaseSettings.getFilesByVersion(version);
const cloudinaryFolder = releaseSettings.cdnPath;
const cloudinaryConfig = releaseSettings.cdnConfig;
cloudinary.config(cloudinaryConfig);

const cloudinaryTags = 'bopr-feature , bopr-admin , price-per-mile , price-per-distance';
const distPath = './dist/';

/**
 *
 * @returns Upload builded files from dist folder in to claudinary
 */

function cloudinaryUploadFiles() {
  const promise = new Promise((resolve, reject) => {
    var uploadPromises = [];
    filesArray.forEach((x) => {
      var thisPromise = cloudinary.uploader
        .upload(distPath + x.name, {
          public_id: x.name,
          tags: cloudinaryTags,
          folder: cloudinaryFolder,
          resource_type: 'raw',
          invalidate: true,
          overwrite: true
        })
        .then(function (uploadresult) {
          console.log('********************');
          console.log('* Uploaded ' + uploadresult.original_filename + ' to ' + cloudinaryFolder + ' at ' + uploadresult.created_at + ':');
          console.log('* ' + uploadresult.public_id);
          console.log('* ' + uploadresult.secure_url);
          console.log('********************');
        })
        .catch(function (err) {
          console.log(err);
        });
      uploadPromises.push(thisPromise);
    });

    Promise.all(uploadPromises)
      .then((result) => {
        console.log(`* ${result.length} Files Uploaded`);
        resolve(result);
      })
      .catch(function (err) {
        console.warn('* Could not upload all files');
        reject(err);
      });
  });
  return promise;
}

const upload = gulp.series(cloudinaryUploadFiles);
exports.upload = upload;

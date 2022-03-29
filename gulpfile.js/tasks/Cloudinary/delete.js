/*eslint-disable @typescript-eslint/no-var-requires */

const gulp = require('gulp');
const currentVersion = require('../../../package.json').version;
const cloudinary = require('cloudinary').v2;
var passedArguments = require('yargs');
var args = passedArguments.argv;
let version = args.bv;

// Settings for Release
var releaseSettings = require('../../shared/releasesettings');
var getCloudinarySearchExpression = require('../../shared/getCloudinaryFilterExpression').getCloudinaryFilterExpression;

const cloudinaryFolder = releaseSettings.cdnPath;
const cloudinaryConfig = releaseSettings.cdnConfig;

cloudinary.config(cloudinaryConfig);

/**
 * Delete files from claudinary based on verison
 * @version provide version to delete for example '--bv x.x.x'
 */

async function cloudinaryDeleteFiles() {
  if (!version) {
    return Promise.reject(`${version} is not valid`);
  }
  if (version == currentVersion) {
    return Promise.reject(`${version} is current version so cannot be deleted`);
  }
  var fileList = releaseSettings.getFilesByVersion(version);
  console.log(fileList);
  let cloudinarySearchExpression = getCloudinarySearchExpression(fileList, cloudinaryFolder);
  //Array of Strings https://cloudinary.com/documentation/admin_api#delete_resources
  let public_ids_to_delete = [];
  let cdnfiles = await cloudinary.search
    .expression(cloudinarySearchExpression)
    .sort_by('created_at', 'desc')
    .execute()
    .then((result) => {
      console.log('Total Found:', result.total_count);
      for (let i = 0; i < result.resources.length; i++) {
        var currentFile = result.resources[i];
        console.log('File: ', currentFile.secure_url);
        console.log(currentFile);
        public_ids_to_delete.push(currentFile.public_id);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  if (public_ids_to_delete.length > 0) {
    let deletedFiles = await cloudinary.api
      .delete_resources(public_ids_to_delete, { resource_type: 'raw' })
      .then((result) => {
        console.log(result);
        return Promise.resolve(result);
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
    Promise.resolve(deletedFiles);
  } else {
    Promise.resolve(public_ids_to_delete);
  }
}

const deleteFiles = gulp.series(cloudinaryDeleteFiles);
exports.delete = deleteFiles;

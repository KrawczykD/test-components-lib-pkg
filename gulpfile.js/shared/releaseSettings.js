/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Generate file array for upload base on verison
 *
 *
 */

function getReleaseFilesByVersion(version) {
  const libName = require('../../package.json').libraryName;

  if (!version) {
    version = require('../../package.json').version;
  }

  var filesArray = [
    {
      name: `${libName}.${version}.es.js`
    },
    {
      name: `${libName}.${version}.umd.js`
    },
    {
      name: `${libName}.${version}.css`
    }
  ];
  return filesArray;
}

/**
 * Claudinary config file and claudinary patch
 *
 */

var cdnConfig = {
  cloud_name: 'djlg2mse2',
  api_key: '158695287227816',
  api_secret: 'A-rj2cSUeCGM6J6757-dAs-EeuY'
};

// replace cdnPatch with your cdn path path should have / on the end

exports.cdnPath = 'vue3-vite/';

exports.getFilesByVersion = getReleaseFilesByVersion;
exports.cdnConfig = cdnConfig;

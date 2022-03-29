/**
 * Generate claudinary search expresionn base on uplaoded file list
 */

function getCloudinaryFilterExpression(fileList, cloudinaryFolder) {
  let cloudinarySearchExpression = '';
  for (let i = 0; i < fileList.length; i++) {
    const filename = fileList[i].name;
    cloudinarySearchExpression += `public_id=${cloudinaryFolder}${filename}`;
    if (i != fileList.length - 1) {
      cloudinarySearchExpression += ' OR ';
    }
  }
  return cloudinarySearchExpression;
}

exports.getCloudinaryFilterExpression = getCloudinaryFilterExpression;

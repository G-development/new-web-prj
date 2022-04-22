var fs = require("fs");
const path = require("path");

/**
 * Create a dir if not exists
 *
 * @param {string} dir String content path and dir name
 */

var createDir = function (dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

/**
 * Copy All file from source folder into destination folder
 * @param {string} source  String content path and source dir name
 * @param {string} dest   String content path and destination dir name
 */

var copyAllFile = function (source, dest) {
  fs.readdir(source, (err, files) => {
    files.forEach((file) => {
      copyFile(path.join(source, file), path.join(dest, "/", file), file);
    });
  });
};

/**
 * Copy file from source folder into destination folder
 * @param {String} source String content path,source dir name and file name to copy
 * @param {String} dest String content path,destination dir name and file name
 * @param {String} file String content file name to cprint in console
 */

var copyFile = function (source, dest, file) {
  fs.copyFile(source, dest, function (err) {
    if (err) return console.log(err);
    console.log(`File ${file} created`);
  });
};

/**
 * Wrtie file into destination folder
 *
 * @param {String} dest String content path,destination dir name and file name
 * @param {String} content String content to be written to the file
 * @param {String} file String content file name to cprint in console
 */

var writeFile = function (dest, content, file) {
  fs.writeFile(dest, content, function (err) {
    if (err) return console.log(err);
    console.log(`file ${file}.json creato!`);
  });
};

exports.createDir = createDir;
exports.copyAllFile = copyAllFile;
exports.copyFile = copyFile;
exports.writeFile = writeFile;

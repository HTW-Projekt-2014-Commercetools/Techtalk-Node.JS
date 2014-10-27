/**
 * Long-Polling chat demo with Node.js
 *
 * @author Sascha Feldmann
 */

var fs = require('fs');

/**
 * Simply render a file by directly returning its contents.
 *
 * @param filePath
 * @param setContentCallback callback function that is called after the file was entirely read
 * @return the whole file's contents
 */
exports.simpleRender = function (filePath, setContentCallback) {
  fs.readFile(filePath, 'utf8', function (error, data) {
     // do NOT return the file contents here, return will block the thread since the client method waits for the return value
     setContentCallback(data);
  });
};
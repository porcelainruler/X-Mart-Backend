const pkgFile = require("../package.json");

var utils = {};

utils.getPkgName = function () {
  return pkgFile.name;
};

utils.getAppVersion = function () {
  return pkgFile.version;
};

utils.getNodeEnv = function () {
  return process.env.NODE_ENV ? process.env.NODE_ENV : "development";
};

utils.getAppSecret = function () {
  return `${utils.getPkgName()}-${utils.getNodeEnv()}`;
};

module.exports = utils;

var express = require("express");
var router = express.Router();
var methods = {};

methods.group = function (prefix, fn) {
  if (!this.prefix) {
    this.prefix = "";
  }
  this.prefix += prefix;
  fn();
  this.prefix = "";
};

methods.all = function (path, ...callbacks) {
  router.all(this.prefix + path, ...callbacks);
};

methods.get = function (path, ...callbacks) {
  router.get(this.prefix + path, ...callbacks);
};

methods.post = function (path, ...callback) {
  router.post(this.prefix + path, ...callback);
};

methods.put = function (path, ...callback) {
  router.put(this.prefix + path, ...callback);
};

methods.patch = function (path, ...callback) {
  router.patch(this.prefix + path, ...callback);
};

methods.delete = function (path, ...callback) {
  router.delete(this.prefix + path, ...callback);
};

methods.router = router;
module.exports = methods;

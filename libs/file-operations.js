const fs = require("fs");
var exec = require("child_process").exec;

module.exports.fileReader = async (path) => {
  try {
    if (fs.existsSync(path)) {
      let data = fs.readFileSync(path);
      data = data.toString();
      return JSON.parse(data);
    } else {
      return null;
    }
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

module.exports.fileWriter = async (path, data) => {
  try {
    var arr = path.split("/");
    arr.pop();
    const director = arr.join("/");
    if (!fs.existsSync(director)) {
      fs.mkdirSync(director);
    }
    fs.writeFileSync(path, data);
    return true;
  } catch (err) {
    console.log(err.message);
    return false;
  }
};

module.exports.deleteFolder = (path) => {
  // Work for folder with only files
  return new Promise((resolve, reject) => {
    exec("rm -rf " + `${path}`, function (err, stdout, stderr) {
      // rm -rf wont work in windows
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

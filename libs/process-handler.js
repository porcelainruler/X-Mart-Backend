const { spawn } = require("child_process");

module.exports.executePythonScript = async (scriptData) => {
  return new Promise(async (resolve, reject) => {
    var largeDataSet = [];
    const python = spawn("python3", scriptData);

    python.stdout.on("data", function (data) {
      largeDataSet.push(data);
    });

    python.on("close", async (code) => {
      if (code === 1) {
        var err = new Error(`python script issue ${scriptData[0]}`);
        reject(err);
      } else {
        resolve(largeDataSet.join(""));
      }
    });

    python.on("uncaughtException", (err) => {
      console.log(err);
    });

    python.stderr.on("data", (err) => {
      console.log(err);
    });
  });
};

const log = require("./libs/logger-handler").log;

// Example of a cron
module.exports.exampleCron = () => {
  execExampleStrategy();
};

var execExampleStrategy = async () => {
  // Logger - Update custom logger
  log({
    level: "debug",
    type: "Cron",
    message: "Pause all strategy cron called",
  });
};


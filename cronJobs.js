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

// Crons List:
/*
1. DB Clean Crons:
  a. OTP Table deletion weekly [Expired OTPs]
  b. Monthly Audit Table Cleaning
  c. Login Token Weekly cleaning
*/

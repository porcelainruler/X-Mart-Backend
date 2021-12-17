const cron = require("node-cron");
const { exampleCron } = require("../../cronJobs");
const log = require("../../libs/logger-handler").log;

// * A index of all crons
const scheduledCrons = {};

const startCron = (id, duration, operation) => {
  try {
    scheduledCrons[id] = cron.schedule(duration, operation);
    log({
      level: "debug",
      type: "Cron",
      message: `Scheduled cron with ID = ${id} and schedule ${duration}`,
    });
  } catch (error) {
    log({
      level: "error",
      type: "Cron",
      message: "Error While scheduling cron",
      error: error.message,
    });
  }
};

const stopCron = (id) => {
  try {
    scheduledCrons[id].stop();
    log({
      level: "debug",
      type: "Cron",
      message: `Stopped cron ID = ${id} `,
    });
  } catch (error) {
    log({
      level: "error",
      type: "Cron",
      message: `Failed to stop Cron ID ${id}`,
      error: error.message,
    });
  }
};

const cronOperations = {
  EXAMPLE_CRON: async () => {
    await exampleCron();
  }
};

module.exports = {
  startCron,
  stopCron,
  cronOperations,
};

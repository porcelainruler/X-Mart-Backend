const { startCron, cronOperations } = require("../utils/helperFunctions/cronHelper");

const initCrons = async () => {
  try {
    const crons = []; // await getCronJobs();
    for (const cron of crons) {
      if (cron["activeFlag"]) startCron(cron["id"], cron["schedule"], cronOperations[cron["cronEnum"]]);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  initCrons,
};

const db = require("../models");

module.exports.getSubscriptionPlans = async (where = {}, attributes = null) => {
  const queryResult = await db.XMSubscriptionPlans.findAll({
    where: where,
    attributes: attributes,
  });
  return JSON.parse(JSON.stringify(queryResult));
};

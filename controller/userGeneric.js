const db = require("../models");

module.exports.getUserOTP = async (where = {}, attributes = null) => {
  const queryResult = await db.XMCustomerOTPManager.findAll({
    where: where,
    attributes: attributes,
  });
  return JSON.parse(JSON.stringify(queryResult));
};

module.exports.createUserOTP = async (data) => {
  const queryResult = await db.XMCustomerOTPManager.create(data);
  return JSON.parse(JSON.stringify(queryResult));
};

module.exports.updateUserOTP = async (where, data) => {
    const queryResult = await db.XMCustomerOTPManager.update(data, {
      where: where,
    });

    return JSON.parse(JSON.stringify(queryResult));
}

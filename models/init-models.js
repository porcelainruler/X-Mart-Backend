var DataTypes = require("sequelize").DataTypes;
var _user = require("./USER");
var _xmSubscriptionPlan = require("./XM_SUBSCRIPTION_PLAN");

function initModels(sequelize) {
  var user = _user(sequelize, DataTypes);
  var xmSubscriptionPlan = _xmSubscriptionPlan(sequelize, DataTypes);

  user.belongsTo(user, { as: "idUser", foreignKey: "id" });
  user.hasOne(user, { as: "user", foreignKey: "id" });

  return {
    user,
    xmSubscriptionPlan,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

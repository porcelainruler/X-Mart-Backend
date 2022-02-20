var DataTypes = require("sequelize").DataTypes;
var _user = require("./USER");
var _xmSubscriptionPlan = require("./XM_SUBSCRIPTION_PLAN");
var _xmCustomerOTPManager = require("./XM_CUSTOMER_OTP_MANAGER");
var _xmCustomerInfo = require("./XM_CUSTOMER_INFO");
var _xmAdminInfo = require("./XM_ADMIN_INFO");
var _xmShopInfo = require("./XM_SHOP_INFO");
var _xmDealerGuyInfo = require("./XM_DEALER_GUY_INFO");

function initModels(sequelize) {
  var user = _user(sequelize, DataTypes);
  var xmSubscriptionPlan = _xmSubscriptionPlan(sequelize, DataTypes);
  var xmCustomerOTPManager = _xmCustomerOTPManager(sequelize, DataTypes);
  var xmCustomerInfo = _xmCustomerInfo(sequelize, DataTypes);
  var xmAdminInfo = _xmAdminInfo(sequelize, DataTypes);
  var xmShopInfo = _xmShopInfo(sequelize, DataTypes);
  var xmDealerGuyInfo = _xmDealerGuyInfo(sequelize, DataTypes);

  user.belongsTo(user, { as: "idUser", foreignKey: "id" });
  user.hasOne(user, { as: "user", foreignKey: "id" });

  return {
    user,
    xmSubscriptionPlan,
    xmCustomerOTPManager,
    xmCustomerInfo,
    xmAdminInfo,
    xmShopInfo,
    xmDealerGuyInfo,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

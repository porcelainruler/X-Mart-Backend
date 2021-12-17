var DataTypes = require("sequelize").DataTypes;
var _user = require("./USER");

function initModels(sequelize) {
  var user = _user(sequelize, DataTypes);

  user.belongsTo(user, { as: "idUser", foreignKey: "id" });
  user.hasOne(user, { as: "user", foreignKey: "id" });

  return {
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

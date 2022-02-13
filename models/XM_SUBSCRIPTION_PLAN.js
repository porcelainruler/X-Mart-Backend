const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "XMSubscriptionPlans",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        planName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        planPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        planValidity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
      sequelize,
      tableName: "XM_SubscriptionPlans",
      schema: "dbo",
      timestamps: false,
    }
  );
};

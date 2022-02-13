const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "XMCustomerInfo",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      countryCode: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.STRING(12),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "XM_SubscriptionPlans",
      schema: "dbo",
      timestamps: false,
    }
  );
};

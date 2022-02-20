const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "XMDeliveryGuyInfo",
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
      address: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      pincode: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      authType: {
        type: DataTypes.INTEGER,
        allowNull: true, // DB Level Default Already Set
      },
      orgId: {
        type: DataTypes.INTEGER,
        allowNull: false, // DB Level Default Already Set
      },
      isApproved: {
        type: DataTypes.INTEGER,
        allowNull: true, // DB Level Default Already Set
      },
      isBanned: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
      },
      latitude: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      longitude: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      activeFlag: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 1,
      },
    },
    {
      sequelize,
      tableName: "XM_DeliveryGuyInfo",
      schema: "dbo",
      timestamps: false,
    }
  );
};

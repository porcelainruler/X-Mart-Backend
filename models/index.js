"use strict";

/**
 * Module dependencies.
 */

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const config = require(path.join(__dirname, "/../config"));

/**
 * Global variables.
 */

const db = {};

/**
 * Read DB configuration details and initilize Sequelize object.
 */

const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
  ...config.dbConfig,
  ...config.db.dbConfig,
});

/**
 * Import DB Model from model files.
 */

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// TODO: Foreign Key constraint apply here through sequelize

//db.customer.belongsTo(db.team, { foreignKey: 'teamId', sourceKey: 'teamId'});
//db.team.hasMany(db.customer, {foreignKey: 'teamId', sourceKey: 'teamId'});

// db.advisoryQuestion.hasMany(db.advisoryAnswer, { foreignKey: 'questionId' });
// db.customer.hasOne(db.customerRiskProfile, { foreignKey: 'customerId' });
// db.customerLogin.belongsTo(db.customer, { foreignKey: 'customerId' });
// db.advisoryBasket.hasOne(db.advisoryBasketDesc, { foreignKey: 'basketId' });
// db.advisoryBasket.hasOne(db.customerBasket, { foreignKey: 'basketId' });
// db.advisoryBasket.hasMany(db.advisoryBasketAllocation, { foreignKey: 'advisoryBasketId' });
// db.advisoryBasketAllocation.hasOne(db.advisoryBasketPortfolio, { foreignKey: 'tradeSymbol', sourceKey: 'tradeSymbol' });
// db.customer.hasOne(db.masterBroker, { foreignKey: 'brokerCode', sourceKey: 'broker' });

// db.customerTransaction.hasOne(db.advisoryBasketPortfolio, { foreignKey: 'tradeSymbol', sourceKey: 'tradeSymbol' });
// db.customerPortfolio.hasOne(db.advisoryBasketPortfolio, { foreignKey: 'tradeSymbol', sourceKey: 'tradeSymbol' });
// db.customerRiskProfile.belongsTo(db.advisoryBasket, { foreignKey: 'basketId', targetkey: 'id' });
// db.customerBasketTransaction.hasMany(db.customerTransaction, { foreignKey: 'requestId', sourceKey: 'requestId' });
// db.customerBasket.hasMany(db.customerPortfolio, { foreignKey: 'basketId', sourceKey: 'basketId' });
// db.customerTransaction.hasOne(db.customerLogin, { foreignKey: 'customerId', sourceKey: 'customerId' });
// db.customer.hasOne(db.masterState, { foreignKey: 'id', sourceKey: 'masterStateId' });
// db.customerPayment.hasOne(db.customer, { foreignKey: 'id', sourceKey: 'customerId' });

// db.portfolioSummary.hasMany(db.portfolioHolding, { foreignKey: 'requestId', sourceKey: 'requestId' });
// db.portfolioSummary.hasOne(db.portfolioComposition, { foreignKey: 'requestId', sourceKey: 'requestId' });
// db.portfolioSummary.hasMany(db.portfolioEquityAllocation, { foreignKey: 'requestId', sourceKey: 'requestId' });
// db.portfolioSummary.hasMany(db.portfolioSectorAllocation, { foreignKey: 'requestId', sourceKey: 'requestId' });
// db.portfolioSummary.hasMany(db.portfolioTransition, { foreignKey: 'requestId', sourceKey: 'requestId' });
// db.portfolioSummary.hasMany(db.portfolioRecommandation, { foreignKey: 'requestId', sourceKey: 'requestId' });

// db.portfolioComposition.hasMany(db.portfolioEquityAllocation, { foreignKey: 'requestId', sourceKey: 'requestId' });
// db.portfolioComposition.hasMany(db.portfolioSectorAllocation, { foreignKey: 'requestId', sourceKey: 'requestId' });
// db.portfolioComposition.hasMany(db.portfolioRecommandation, { foreignKey: 'requestId', sourceKey: 'requestId' });

// db.customerGoalTransaction.hasOne(db.advisoryBasketPortfolio, { foreignKey: 'tradeSymbol', sourceKey: 'tradeSymbol' });
// db.customerGoalPortfolio.hasOne(db.advisoryBasketPortfolio, { foreignKey: 'tradeSymbol', sourceKey: 'tradeSymbol' });

// db.userApiKey.belongsTo(db.user, { foreignKey: 'userId' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

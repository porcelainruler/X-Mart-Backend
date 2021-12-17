/**
 * Module dependencies.
 */

const fs = require("fs");
const moment = require("moment");

const { createLogger, format, transports, info } = require("winston");
const { combine, timestamp, label, printf, prettyPrint } = format;
require("winston-daily-rotate-file");

const debug = require("debug");
const path = require("path");

/**
 * Global variables.
 */

const pwd = process.env.PWD;
const confUtils = require("../utils/config-utils");
const config = require("../config");
const winston = require("winston/lib/winston/config");
const { marketDataLogging } = require("../constants/strategy");

const customerlogger = createLogger({
  transports: [
    new transports.Console({
      level: "debug",
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.json(),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    }),
    new transports.DailyRotateFile({
      level: `${config.logLevel}`,
      format: format.combine(format.timestamp(), format.json()),

      dirname: `${config.logDir}`,
      filename: "Customer-%DATE%",
      extension: ".log",
      datePattern: `${config.logFileRotationPattern}`,
      maxSize: `${config.logFileMaxSize}k`,
      maxFiles: `${config.logFilePersist}d`,
    }),
  ],
});

const apilogger = createLogger({
  transports: [
    new transports.DailyRotateFile({
      level: `${config.logLevel}`,
      format: format.combine(format.timestamp(), format.json()),

      dirname: `${config.logDir}`,
      filename: "API-%DATE%",
      extension: ".log",
      datePattern: `${config.logFileRotationPattern}`,
      maxSize: `${config.logFileMaxSize}k`,
      maxFiles: `${config.logFilePersist}d`,
    }),
  ],
});

const systemlogger = createLogger({
  transports: [
    new transports.Console({
      level: "debug",
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.json(),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    }),
    new transports.DailyRotateFile({
      level: `${config.logLevel}`,
      format: format.combine(format.timestamp(), format.json()),

      dirname: `${config.logDir}`,
      filename: "System-%DATE%",
      extension: ".log",
      datePattern: `${config.logFileRotationPattern}`,
      maxSize: `${config.logFileMaxSize}k`,
      maxFiles: `${config.logFilePersist}d`,
    }),
  ],
});

const marketDatalogger = createLogger({
  transports: [
    new transports.Console({
      level: "debug",
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.json(),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    }),
    new transports.DailyRotateFile({
      level: `${config.logLevel}`,
      format: format.combine(format.timestamp(), format.json()),

      dirname: `${config.logDir}`,
      filename: "MarketData-%DATE%",
      extension: ".log",
      datePattern: `${config.logFileRotationPattern}`,
      maxSize: `${config.logFileMaxSize}k`,
      maxFiles: `${config.logFilePersist}d`,
    }),
  ],
});

module.exports.log = (args) => {
  // apiLogs will have req or res or both (may also have customerId)
  // customerLogs will not have req and res but will have customerId
  // systemLogs are all other logs (No req, res, customerId, apiEndpoint)

  if (args.type === "request" || args.type === "response" || args.type === "apiCall") {
    apilogger.log(args);
  } else if (args.customerId) {
    customerlogger.log(args);
  } else if (args.type === "marketDataDeep") {
    if (marketDataLogging) marketDatalogger.log(args);
  } else {
    systemlogger.log(args);
  }
};

module.exports.requestLogger = (req) => {
  if (req) {
    var infoObj = {
      customerId: req.user ? req.user.id : "-",
      url: req.url ? req.url : "-",
      method: req.method ? req.method : "-",
      user: req.user ? req.user : "-",
      body: req.body ? req.body : "-",
    };
    this.log({
      level: "debug",
      type: "request",
      customerId: infoObj.customerId,
      method: infoObj.method,
      url: infoObj.url,
      user: infoObj.user,
      req: infoObj.body,
    });
  }
};

module.exports.responseLogger = (err, req, resCode, resData) => {
  if (req) {
    var infoObj = {
      customerId: req.user ? req.user.id : "-",
      url: req.url ? req.url : "-",
      method: req.method ? req.method : "-",
      body: resData ? resData : "-",
      user: req.user ? req.user : "-",
      errMessage: err ? err.message : "-",
    };
    if (err || resCode != 200) {
      this.log({
        level: "error",
        type: "response",
        customerId: infoObj.customerId,
        method: infoObj.method,
        url: infoObj.url,
        code: resCode,
        user: infoObj.user,
        message: infoObj.errMessage,
        error: err,
      });
    } else {
      this.log({
        level: "debug",
        type: "response",
        customerId: infoObj.customerId,
        method: infoObj.method,
        url: infoObj.url,
        code: resCode,
        user: infoObj.user,
        res: infoObj.body,
      });
    }
  }
};

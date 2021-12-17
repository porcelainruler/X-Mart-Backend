/**
 * Default configurations for all environments.
 */

const confUtils = require("../utils/config-utils");

module.exports = {
  logFormat: ':remote-addr [:date[clf]][:res[X-Request-Id]] - ":method :url HTTP/:http-version" :status :res[content-length] :response-time[digits]',
  tmpDir: "./tmp",
  cacheDir: "./cache-files",
  logDir: "./logs",
  protocol: "https", // Make this as http when connected to localhost for saas for callback URL
  apiExpiresIn: 60000,
  logFileMaxSize: 1000, // In Kb
  logFilePersist: 14, // In days
  logFileRotationPattern: "YYYY-MM-DD",
  logLevel: "debug",
  api: {
    version: "v1",
  },
  jwtOptions: {
    secret: confUtils.getAppSecret(),
    issuer: confUtils.getPkgName(),
    expiresIn: 60000,
    ignoreExpiration: true,
  },
  dbConfig: {
    port: 1433,
    dialect: "mssql",
    logging: false, // Sequlize logging is depricated, making it true generates warning at startup
  },
  corsOptions: {
    origin: "*",
    methods: "POST, GET, PATCH, DELETE",
    allowedHeaders: "Content-Type, Authorization",
  },
  enableWebsocket: true,
  websocketPublishInterval: 3000,
};

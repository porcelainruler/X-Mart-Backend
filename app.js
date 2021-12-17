/**
 * Module dependencies.
 */

const express = require("express");
const logger = require("morgan");
const requestId = require("express-request-id");
const cors = require("cors");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const tls = require("tls");

tls.DEFAULT_MIN_VERSION = "TLSv1";

/*
 * Global variables
 */

const app = express();
const routePath = `${__dirname}/routes`;
const config = require("./config");
const swaggerSpec = require("./libs/swagger-handler");
const dbConnection = require("./models");
const response = require("./libs/response-handler");
const confUtils = require("./utils/config-utils");

const adminMiddleware = require("./middlewares/admin");
const authMiddleware = require("./middlewares/auth");
const monitorMiddleware = require("./middlewares/monitor");
const cronJobs = require("./cronJobs");
const log = require("./libs/logger-handler").log;

/*
 * Request ID added to req params
 */
app.use(requestId());

/*
 * Application middleware functions
 */

app.disable("x-powered-by");

/*
 * logger for API call to console
 */

app.use(logger(config.logFormat));
app.use(function (req, res, next) {
  if (req.method !== "OPTIONS") {
    log({ level: "info", type: "apiCall", message: `${req.method} -> ${req.url} ` });
  }
  next();
});

app.use(cors(config.corsOptions));

app.use(
  express.json({
    inflate: true,
    limit: "100kb",
    reviver: null,
    strict: true,
    type: "application/json",
    verify: undefined,
  })
);

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: false,
    inflate: true,
    limit: "100kb",
    parameterLimit: 1000,
    type: "application/x-www-form-urlencoded",
    verify: undefined,
  })
);

app.use(
  "/coverage",
  express.static("coverage", {
    index: "index.html",
  })
);

/*
 * DB connection verfication.
 */

dbConnection.sequelize
  .authenticate()
  .then(() => {
    // debug('Connection has been established successfully.');
    log({ level: "info", message: "Connection to DB has been established successfully !" });
  })
  .catch((err) => {
    log({
      level: "error",
      message: `Unable to connect to the DB due to [${err.name} : ${err.message}]`,
    });
    process.exit(1);
  });

console.log("Application server initialized :)");

// var StompClient = require('stomp-client/lib/client').StompClient;
// var destination = '/queue/nodejspoc';
// var client = new StompClient('127.0.0.1', 61613, '', '', '1.0');

// console.log("Trying to connect with stompclient.")
// client.connect(function(sessionId) {
//   console.log("Trying to subscribe with stompclient.");
//     client.subscribe(destination, function(body, headers) {
//       console.log('This is the body of a message on the subscribed queue:', body);
//     });
//     console.log("Trying to publish to stompclient.")
//     client.publish(destination, 'This is dummy text');
// }, function(err){
//   console.log("Error in connecting with stomp client");
//   console.log(err);
// });

if (!fs.existsSync(config.tmpDir)) {
  try {
    fs.mkdirSync(config.tmpDir);
    log({ level: "debug", message: `${config.tmpDir} folder created !` });
  } catch (err) {
    log({
      level: "error",
      message: `Unable to create ${config.tmpDir} -> [${err.name} : ${err.message}]`,
    });
  }
}

if (!fs.existsSync(config.cacheDir)) {
  try {
    fs.mkdirSync(config.cacheDir);
    log({ level: "debug", message: `${config.cacheDir} folder created !` });
  } catch (err) {
    log({
      level: "error",
      message: `Unable to create ${config.cacheDir} -> [${err.name} : ${err.message}]`,
    });
  }
}

if (!fs.existsSync(config.logDir)) {
  try {
    fs.mkdirSync(config.logDir);
    log({ level: "debug", message: `${config.logDir} folder created !` });
  } catch (err) {
    log({
      level: "error",
      message: `Unable to create ${config.logDir} -> [${err.name} : ${err.message}]`,
    });
  }
}

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", monitorMiddleware.serverDetail);
// API Details : User login api
app.post("/login", adminMiddleware.getRequestToken);
// API Details : User login forgot password send OTP
app.post("/login/forgot/send-otp", adminMiddleware.forgotPasswordSendOTP);
// API Details : User login forgot password check OTP
app.post("/login/forgot/check-otp", adminMiddleware.forgotPasswordCheckOTP);

// ~~~~~~~~~~~~~~~~~~~  Testing ~~~~~~~~~~~~~~~~~~~
// const testAlert = async (req, res) => {
//   let data = {
//     userId: 2,
//     strategyTemplateId: 6,
//     isPending: true,
//     isApproved: false,
//     isRejected: false,
//   };
//   alertGenerator.createStrategyTemplateApprovalAlert(data);
//   response(null, res, 200, { message: "Done !" }, req);
// };
// app.get("/testAlert", testAlert);
// ~~~~~~~~~~~~~~~~~~~  Testing ~~~~~~~~~~~~~~~~~~~

/*
 * Validate Header API Key
 */

app.use(authMiddleware.isJWTAuthenticated);
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhZGliYWsyOCAgIiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTYyNDM2NzYyOCwiZXhwIjoxNjI0NDI3NjI4LCJpc3MiOiJzdHJhdGVneWJ1aWxkZXJiYWNrZW5kIn0.eGAbdH-dLDmIQB7LakpSlBhoTJ6QkFWliBPzvPlPKWU

/*
 * Import all routes that app supports.
 */

fs.readdirSync(routePath)
  .filter(function (file) {
    return fs.lstatSync(`${routePath}/${file}`).isDirectory();
  })
  .forEach(function (dir) {
    fs.readdirSync(`${routePath}/${dir}`)
      .filter(function (file) {
        return fs.lstatSync(`${routePath}/${dir}/${file}`).isFile() && file.slice(-3) === ".js";
      })
      .forEach(function (file) {
        app.use(`/${dir}`, require(`${routePath}/${dir}/`));
      });
  });

/*
 * Default routes if no version specified.
 */

try {
  fs.readdirSync(`${routePath}/${config.api.version}`)
    .filter(function (file) {
      return fs.lstatSync(`${routePath}/${config.api.version}/${file}`).isFile() && file.slice(-3) === ".js";
    })
    .forEach(function (file) {
      app.use("/", require(`${routePath}/${config.api.version}/`));
    });
} catch (err) {
  if (err.code === "ENOENT") {
    // console.error('Default API Version not found');
    log({ level: "error", message: "Default API Version not found" });
  } else {
    // console.error('Error reading default API Router');
    log({ level: "error", message: "Error reading default API Router" });
  }
  process.exit(1);
}

/*
 * Application unavailable resource handling middleware.
 */

app.use(function (req, res, next) {
  if (res.headersSent) {
    return next();
  } else {
    var resObject = {
      protocol: req.protocol,
      hostname: req.hostname,
      method: req.method,
      url: req.originalUrl,
    };

    response(null, res, 404, resObject, req);
  }
});

/*
 * Application error handling middleware.
 */

app.use(function (err, req, res, next) {
  console.log(err);
  if (res.headersSent) {
    return next(err);
  } else {
    response(err, res, 500, null, req);
  }
});

module.exports = app;

/**
 * Configurations for development environments.
 */

module.exports = {
  db: {
    database: "x_mart_dev",
    username: "xmart",
    password: "Xmart@123",
    dbConfig: {
      host: "GGNLSHUBHAM",
    },
  },
  emailer: {
    service: "outlook",
    user: "",
    pass: "",
  },
  twilio: {
    accountSid: "AC3e0525f5f7e01396396e0eedb5cb4046",
    authToken: "aa9dcc9da2b2b5e7b4ce53b6f61a1462",
    regMobileNum: "+14342334154",
  },
  udp: {
    ip: "127.0.0.1",
    examplePort: "8194",
    dumpFile: "dump.txt",
    listeningStatus: {
      exampleData: false,
    },
    listernerIP: "127.0.0.1",
  },
  activeMq: {
    testingUrl: "mqtt://127.0.0.1:1883",
  },
};

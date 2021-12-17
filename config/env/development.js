/**
 * Configurations for development environments.
 */

module.exports = {
  db: {
    database: "xMartDev",
    username: "sa",
    password: "Xmart@123",
    dbConfig: {
      host: "127.0.0.1",
    },
  },
  emailer: {
    service: "outlook",
    user: "",
    pass: "",
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

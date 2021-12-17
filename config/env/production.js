/**
 * Configurations for development environments.
 */

module.exports = {
  db: {
    database: "xMartProd",
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
};

/**
 * Module dependencies.
 */

const app = require("../../libs/router-group");


// TODO -> Include validatorMiddleware for all post requests

app.group("/admin", function () {
  // app.get("/tester", adminMiddleware.getUsersForAdmin);
});

// app.group("/superadmin", function () {
// });

module.exports = app.router;

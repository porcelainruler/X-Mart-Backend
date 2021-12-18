// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const config = require("../../config");
const log = require("../../libs/logger-handler").log;
const accountSid = process.env.TWILIO_ACCOUNT_SID || config.twilio.accountSid;
const authToken = process.env.TWILIO_AUTH_TOKEN || config.twilio.authToken;

let client = null;
try {
  client = require("twilio")(accountSid, authToken);
  log({ level: "info", message: "Messager successfully initialized." });
} catch (err) {
  log({ level: "error", message: err.message });
}
const sendMessage = (message, phoneNum = "+917011012392") => {
  if (client) {
    try {
    client.messages
      .create({
        body: message,
        from: config.twilio.regMobileNum,
        to: phoneNum,
      })
      .then((msg) => console.log(msg.sid));
    } catch(err) {
        console.log(err);
    }
  } else {
    log({ level: "error", message: "Messager not initialized." });
  }
};

module.exports = {sendMessage};

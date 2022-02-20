const { createUserOTP } = require("../controller/userGeneric");
const response = require("../libs/response-handler");
const { createError } = require("../utils/helperFunctions/genericHelpers");
const { validateOTPObject, createOTP, sendOTPHelper } = require("../utils/helperFunctions/userGeneric");

module.exports.sendOTP = async function (req, res) {
  try {
    let otpArgs = {
      userType: req.body.userType,
      // const authType = req.body.authTYPE; //! FOR OTP only authType allowed is X-MArt Auth
      emailOrNumberEnum: req.body.emailOrNumberEnum,
      username: req.body.username, // Will be Email for emailOrNumberEnum = 1 & Number for emailOrNumberEnum = 2
      otpTypeEnum: req.body.otpTypeEnum, // Type of Request
    };

    const otpResHelper = await sendOTPHelper(otpArgs);

    if (otpResHelper.isSuccessful) {
      response(null, res, 200, otpResHelper.successMessage, req);
    } else {
      response(err, res, 500, null, req);
    }
  } catch (err) {
    // Log Error Here
    response(err, res, 500, null, req);
  }
};

module.exports.registerUser = async function (req, res) {
  try {
    const userType = req.body.userType;
  } catch (err) {
    // Log Error Here
  }
};

module.exports.loginUser = async function (req, res) {
  try {
    const userType = req.body.userType;
  } catch (err) {
    // Log Error Here
  }
};

const { createUserOTP } = require("../controller/userGeneric");
const response = require("../libs/response-handler");
const { createError } = require("../utils/helperFunctions/genericHelpers");
const { validateOTPObject, createOTP } = require("../utils/helperFunctions/userGeneric");

module.exports.sendOTP = async function (req, res) {
  try {
    const otpArgs = {
      userType: req.body.userType,
      // const authType = req.body.authTYPE; //! FOR OTP only authType allowed is X-MArt Auth
      emailOrNumberEnum: req.body.emailOrNumberEnum,
      username: req.body.username, // Will be Email for emailOrNumberEnum = 1 & Number for emailOrNumberEnum = 2
      otpTypeEnum: req.body.otpTypeEnum, // Type of Request
    };

    const validatedOTPObject = await validateOTPObject(otpArgs);

    if (!validatedOTPObject.isValid) {
      const errorBody = createError(validatedOTPObject.errorMessages);
      response(errorBody, null, 500, null, req);
    }

    const currDateTime = new Date();
    const otpValue = createOTP(otpValueTypes.NUMERIC, 4);

    // Make OTP Entry in DB:
    // TODO: Get UserId from username -> Then input userId here
    let otpStruct = {
      customerId: userId,
    };
    const createOTPRes = await createUserOTP(otpStruct);
  } catch (err) {
    // Log Error Here
    response(err, null, 500, null, req);
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

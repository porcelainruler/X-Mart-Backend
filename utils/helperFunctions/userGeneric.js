const { userTypeEnum, emailOrNumberEnum, otpTypeEnum, otpValueTypes } = require("../../constants/userGeneric");
const { isNotNull, isNumericValue } = require("./genericHelpers");

let validateOTPObject = async (otpArgs) => {
  let responseObject = {
    isValid: true,
    data: otpArgs,
    errorMessages: "",
  };

  let userType = otpArgs.userType;
  let emailOrNumber = otpArgs.emailOrNumber;
  let username = otpArgs.username; // Will be Email for emailOrNumberEnum = 1 & Number for emailOrNumberEnum = 2
  let otpType = otpArgs.otpType;

  // userType Validation
  if (isNotNull(userType)) {
    return {
      isValid: false,
      data: otpArgs,
      errorMessages: "Error: userType must be provided for sendOtp request",
    };
  }

  if (!isNumericValue(userType)) {
    return {
      isValid: false,
      data: otpArgs,
      errorMessages: "Error: Valid userType value should be provided. userType should be an integer value",
    };
  } else {
    userType = parseInt(userType);
    otpArgs.userType = userType;
  }

  if (!Object.values(userTypeEnum).includes(userType)) {
    return {
      isValid: false,
      data: otpArgs,
      errorMessages: "Error: Valid userType value should be provided. userType should be {1-4}",
    };
  }

  // emailOrNumber Enum Validation
  if (isNotNull(emailOrNumber)) {
    return {
      isValid: false,
      data: otpArgs,
      errorMessages: "Error: emailOrNumber must be provided for sendOtp request",
    };
  }

  if (!isNumericValue(emailOrNumber)) {
    return {
      isValid: false,
      data: otpArgs,
      errorMessages: "Error: Valid emailOrNumber value should be provided. emailOrNumber should be an integer value",
    };
  } else {
    emailOrNumber = parseInt(emailOrNumber);
    otpArgs.emailOrNumber = emailOrNumber;
  }

  if (!Object.values(emailOrNumberEnum).includes(emailOrNumber)) {
    return {
      isValid: false,
      data: otpArgs,
      errorMessages: "Error: Valid emailOrNumber value should be provided. emailOrNumber should be {1-2}",
    };
  }

  // username Validation with emailOrNumberEnum
  if (isNotNull(username)) {
    return {
      isValid: false,
      data: otpArgs,
      errorMessages: "Error: username must be provided for sendOtp request",
    };
  }

  if (emailOrNumber === emailOrNumberEnum.PHONE_NUMBER && (!isNumericValue(username) || !isValidMobileNumber(username))) {
    return {
      isValid: false,
      data: otpArgs,
      errorMessages: "Error: Valid mobile number should be provided. Number should be a 10 digit integer value",
    };
  } else {
    username = parseInt(username);
    otpArgs.userName = userName;
  }

  if (emailOrNumber === emailOrNumberEnum.EMAIL && (!isNotNull(username) || !isValidEmail(username))) {
    return {
      isValid: false,
      data: otpArgs,
      errorMessages: "Error: Valid email id should be provided.",
    };
  } else {
    username = String(username);
    otpArgs.userName = username;
  }

  // otpType Enum
  if (isNotNull(otpType)) {
    return {
      isValid: false,
      data: otpArgs,
      errorMessages: "Error: otpType must be provided for sendOtp request",
    };
  }

  if (!isNumericValue(otpType)) {
    return {
      isValid: false,
      data: otpArgs,
      errorMessages: "Error: Valid otpType value should be provided. otpType should be an integer value",
    };
  } else {
    otpType = parseInt(otpType);
    otpArgs.otpType = otpType;
  }

  if (!Object.values(otpTypeEnum).includes(otpType)) {
    return {
      isValid: false,
      data: otpArgs,
      errorMessages: "Error: Valid otpType value should be provided. otpType should be {1-3}",
    };
  }

  responseObject.data = otpArgs;
  return responseObject;
};

/**
 * Helper Function to create OTP
 * @param {*} valueType {1 - Numeric, 2 - AlphaNumeric}
 * @param {*} length
 */
let createOTP = (valueType = 1, length = 4) => {
  let otpRes = "";

  // Currently, only numeric OTP are supported
  if (valueType !== otpValueTypes.NUMERIC) valueType = otpValueTypes.NUMERIC;

  if (valueType === otpValueTypes.NUMERIC) {
    for (let idx = 0; idx < length; idx++) {
      if (idx === 0) {
        let val = Math.ceil(Math.random() * 9) % 10;
        while (val !== 0) {
          val = Math.ceil(Math.random() * 9) % 10;
        }
        otpRes += val;
      } else {
        let val = Math.ceil(Math.random() * 9) % 10;
        otpRes += val;
      }
    }
  }

  return otpRes;
};

module.exports = {
  validateOTPObject,
  createOTP,
};

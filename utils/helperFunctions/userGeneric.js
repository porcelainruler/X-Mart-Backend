const { userTypeEnum, emailOrNumberEnum, otpTypeEnum, otpValueTypes } = require("../../constants/userGeneric");
const { createUserOTP, updateUserOTP } = require("../../controller/userGeneric");
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

// Helper function to Send and Resend OTP
let sendOTPHelper = async (otpArgs) => {
  let otpResponseObj = {
    isSuccessful: true,
    errorMessage: "",
    successMessage: "",
  };
  try {
    const validatedOTPObject = await validateOTPObject(otpArgs);

    if (!validatedOTPObject.isValid) {
      const errorBody = createError(validatedOTPObject.errorMessages);
      otpResponseObj.isSuccessful = false;
      otpResponseObj.errorMessage = errorBody;
    } else {
      otpArgs = validateOTPObject.data;
    }

    let expireDateTime = moment(new Date()).add(30, "m").toDate();
    const otpValue = createOTP(otpValueTypes.NUMERIC, 4);

    // Make OTP Entry in DB:
    // TODO: Get UserId from username -> Then input userId here
    let userId = -1;
    if (otpArgs.emailOrNumber === emailOrNumberEnum.EMAIL) {
      // Update userId from Email
    } else if (otpArgs.emailOrNumber === emailOrNumberEnum.PHONE_NUMBER) {
      // Send userId from Phone Number
    }

    // Delete if any OTP Pending for this user
    const where = {
        customerId: userId,
        userType: otpArgs.userType,
        activeFlag: true,
    }
    const otpUpdateRes = updateUserOTP(where, {activeFlag: false});

    let otpStruct = {
      customerId: userId,
      otpForEnum: otpArgs.otpType,
      userType: otpArgs.userType,
      otp: otpValue,
      expireTime: expireDateTime,
      activeFlag: true,
    };
    const [createOTPRes, isCreated] = await createUserOTP(otpStruct);

    otpResponseObj.successMessage = "OTP Sent successfully to ";
    return otpResponseObj;
  } catch (err) {
    // Log Error
    otpResponseObj.isSuccessful = false;
    otpResponseObj.errorMessage = new Error(err.message);
  }
};

module.exports = {
  validateOTPObject,
  createOTP,
  sendOTPHelper,
};

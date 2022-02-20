const emailOrNumberEnum = {
  EMAIL: 1,
  PHONE_NUMBER: 2,
};

const userTypeEnum = {
  CUSTOMER: 1,
  SHOP: 2,
  ADMIN: 3,
  DELIVERY: 4,
};

const authTypeEnum = {
  X_MART_AUTH: 1,
  GMAIL: 2,
  FACEBOOK: 3,
  LINKEDIN: 4,
};

const otpTypeEnum = {
  LOGIN: 1,
  CHANGE_PASSWORD: 2,
  REGISTER: 3,
};

const otpValueTypes = {
  NUMERIC: 1,
  ALPHANUMERIC: 2,
};

module.exports = {
  emailOrNumberEnum,
  userTypeEnum,
  authTypeEnum,
  otpTypeEnum,
  otpValueTypes,
};

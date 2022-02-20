// Make Compare and IsExist, Null Non Zero check
let isNumericValue = (value) => {
  if (Number(value)) {
    return true;
  } else {
    return false;
  }
};

let isNotNull = (value) => {
  if (value !== null) {
    return true;
  } else {
    return false;
  }
};

let isAlphaNumericValue = (value) => {
  if (typeof value !== "string") {
    value = String(value);
  }

  var code, idx, len;
  len = value.length();

  if (len <= 0) return false;

  for (idx = 0, len = value.length; idx < len; idx++) {
    code = value.charCodeAt(idx);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123) // lower alpha (a-z)
    ) {
      return false;
    }
  }
  return true;
};

let isValidMobileNumber = (value) => {
    if(!isNotNull(value) || !isNumericValue(value)) {
        return false;
    }

    value = String(value);

    if(value.length !== 10) {
        return false;
    }

    return true;
};

let isValidEmail = (value) => {
    // TODO: Complete this method
    return true
}

let createError = (message) => {
  return new Error(message);
};

module.exports = {
  isNumericValue,
  isNotNull,
  isAlphaNumericValue,
  isValidMobileNumber,
  isValidEmail,
  createError,
};

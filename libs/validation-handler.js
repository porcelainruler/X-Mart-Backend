const { validationResult } = require("express-validator");

const errorReducer = (accumulator, currentValue) => {
  accumulator[currentValue.param] = `${currentValue.msg} '${currentValue.value}'`;
  return accumulator;
};

module.exports.validationHandler = async (req) => {
  try {
    const validationErr = await validationResult(req);
    if (!validationErr.isEmpty()) {
      return validationErr.errors.reduce(errorReducer, {});
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

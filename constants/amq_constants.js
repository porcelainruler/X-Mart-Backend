const requestType = {
  XM_EXAMPLE: 1,
  XM_INVALID_CODE: 99999,
};

//? whenever you change Integer size do go and Change read/write in
//? object convertor

const _DATA_SIZE = {
  INT_4: "I4",
  INT_2: "I2",
  DOUBLE: "D",
  FLOAT: "F",
  STR: "W",
};

const activeMqLogging = true;
const retryTimeoutLimit = 20;
const retryAttemptLimit = 5;

module.exports = {
  requestType: requestType,
  _DATA_SIZE: _DATA_SIZE,
  activeMqLogging: activeMqLogging,
  retryTimeoutLimit: retryTimeoutLimit,
  retryAttemptLimit: retryAttemptLimit,
};

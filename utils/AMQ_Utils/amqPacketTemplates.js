const { _DATA_SIZE, requestType } = require("../../constants/activemq_constants");
const { INT_4, INT_2, DOUBLE, FLOAT, STR } = _DATA_SIZE;

const fetchTemplate = {
  [requestType.XM_EXAMPLE]: {
    messageHeader: {
      messageLength: INT_4,
      messageType: INT_4,
    },
    xmId: INT_4,
    xmMessage: [INT_4],
  },
};

module.exports = {
  getTemplate: fetchTemplate,
};

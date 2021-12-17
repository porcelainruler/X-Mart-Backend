const { lokiDataTypes } = require("../../constants/udpConstants");
const { createNewCollection } = require("../operations/lokijsOperations");
// const { startSendingpacket } = require("./udpTesting");

const initInlineDb = () => {
  createNewCollection(lokiDataTypes.INDEX);
  createNewCollection(lokiDataTypes.SOCKET, "socketId");
  createNewCollection(lokiDataTypes.PUBLISH, "esteeId");
  createNewCollection(lokiDataTypes.USER, "accoundId");
  createNewCollection(lokiDataTypes.ALERT_INFO, "userId");
  // startSendingpacket();
  console.log("Inmemory DB initialized");
};

module.exports = {
  initInlineDb,
};

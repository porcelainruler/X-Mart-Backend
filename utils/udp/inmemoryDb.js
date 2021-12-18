const { lokiDataTypes } = require("../../constants/udpConstants");
const { createNewCollection } = require("../operations/lokijsOperations");
const log = require("../../libs/logger-handler").log;
// const { startSendingpacket } = require("./udpTesting");

const initInlineDb = () => {
  createNewCollection(lokiDataTypes.INDEX);
  createNewCollection(lokiDataTypes.SOCKET, "socketId");
  createNewCollection(lokiDataTypes.PUBLISH, "esteeId");
  createNewCollection(lokiDataTypes.USER, "accoundId");
  createNewCollection(lokiDataTypes.ALERT_INFO, "userId");
  // startSendingpacket();
  log({ level: "info", message: "Inmemory DB Initialized" });
};

module.exports = {
  initInlineDb,
};

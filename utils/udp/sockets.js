const { findOneInCollection, updateDataToCollection, addDataToCollection, removeDataFromColl } = require("../operations/lokijsOperations");
const { lokiDataTypes } = require("../../constants/udpConstants");

module.exports.registerSocket = (socketRequest) => {
  if (socketRequest["subscriptionType"] === "alertSub") {
    let obj = findOneInCollection(lokiDataTypes.ALERT_INFO, { userId: socketRequest.userId });
    if (obj === null) {
      addDataToCollection(lokiDataTypes.ALERT_INFO, socketRequest);
    } else {
      for (key in socketRequest) {
        obj[key] = socketRequest[key];
      }
      updateDataToCollection(lokiDataTypes.ALERT_INFO, obj);
    }
  } else {
    let obj = findOneInCollection(lokiDataTypes.SOCKET, { socketId: socketRequest.socketId });
    if (obj === null) {
      addDataToCollection(lokiDataTypes.SOCKET, socketRequest);
    } else {
      for (key in socketRequest) {
        obj[key] = socketRequest[key];
      }
      updateDataToCollection(lokiDataTypes.SOCKET, obj);
    }
  }
};

module.exports.getAlertDetail = (userId) => {
  return findOneInCollection(lokiDataTypes.ALERT_INFO, { userId: userId });
};

module.exports.removeSocket = (socketIdObj) => {
  let obj = findOneInCollection(lokiDataTypes.SOCKET, { socketId: socketIdObj });
  removeDataFromColl(lokiDataTypes.SOCKET, obj);
};

module.exports.getSocketDetails = (id) => {
  return findOneInCollection(lokiDataTypes.SOCKET, { socketId: id });
};

module.exports.getAlertDetail = (userId) => {
  return findOneInCollection(lokiDataTypes.ALERT_INFO, { userId: userId });
};

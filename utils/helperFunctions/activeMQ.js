const { log } = require("../../libs/logger-handler");
const { getTemplate } = require("../AMQ_Utils/amqPacketTemplates");
const { _DATA_SIZE } = require("../../constants/amq_constants");
const { INT_4, INT_2, DOUBLE, STR, FLOAT } = _DATA_SIZE;

const sizeConvertor = {
  [INT_2]: 2,
  [INT_4]: 4,
  [FLOAT]: 4,
  [DOUBLE]: 8,
};

const sizeInBytesHelper = (queuePacket, template) => {
  let messageLength = 0;
  for (key in template) {
    if (template[key] === STR) {
      // * if string
      if (key === "esteeId") messageLength += 33;
      else if (queuePacket[key]) messageLength += queuePacket[key].length; //if string, size is length
    } else if (sizeConvertor[template[key]]) {
      // * if primitive
      messageLength += sizeConvertor[template[key]]; //if primitive, use sizeConvertor
    } else if (Array.isArray(template[key])) {
      // * if array
      let temp = template[key][0]; //if array
      let qpcktkey = queuePacket[key];
      if (typeof temp === "object" && temp != null) {
        for (let element of queuePacket[key]) {
          if (element) messageLength += sizeInBytesHelper(element, temp); //if array of object, recur same method on each
        }
      } else if (temp === STR) {
        for (let element of queuePacket[key]) {
          if (key === "esteeId") messageLength += 33;
          else messageLength += element.length; //if array of string, add length of all elements
        }
      } else {
        messageLength += queuePacket[key].length * sizeConvertor[temp]; //if array of primitives, multiply size by number of elements
      }
    } else {
      // * if object
      messageLength += sizeInBytesHelper(queuePacket[key], template[key]);
    }
  }
  return messageLength;
};

module.exports.sizeInBytes = (queuePacket) => {
  return sizeInBytesHelper(queuePacket, getTemplate[queuePacket.messageHeader.messageType]);
};

const { _DATA_SIZE } = require("../../constants/activemq_constants");
const { log } = require("../../libs/logger-handler");
const { INT_4, INT_2, STR, DOUBLE, FLOAT } = _DATA_SIZE;

const recur = (obj, buf, pos, template) => {
  for (let key in template) {
    const data = obj[key];
    switch (template[key]) {
      case INT_4:
        buf.writeInt32LE(data, pos);
        pos += 4;
        break;
      case INT_2:
        buf.writeInt16LE(data, pos);
        pos += 2;
        break;
      case DOUBLE:
        buf.writeDoubleLE(data, pos);
        pos += 8;
        break;
      case FLOAT:
        buf.writeFloatLE(data, pos);
        pos += 4;
        break;
      case STR:
        if (obj[key]) {
          buf.write(data, pos);
          if (key === "esteeId") {
            pos += 33;
          } else {
            pos += data.length;
          }
        }
        break;
      default:
        if (Array.isArray(obj[key])) {
          let temp = template[key][0];
          if (typeof temp === "object" && temp != null) {
            for (let element of obj[key]) {
              let { tempBytes, tempPos } = recur(element, buf, pos, temp);
              buf = tempBytes;
              pos = tempPos;
            }
          } else {
            for (let element of obj[key]) {
              switch (temp) {
                case INT_4:
                  buf.writeInt32LE(element, pos);
                  pos += 4;
                  break;
                case INT_2:
                  buf.writeInt16LE(element, pos);
                  pos += 2;
                  break;
                case DOUBLE:
                  buf.writeDoubleLE(element, pos);
                  pos += 8;
                  break;
                case FLOAT:
                  buf.writeFloatLE(element, pos);
                  pos += 4;
                  break;
                case STR:
                  if (element) {
                    buf.write(element, pos);
                    if (key === "esteeId") {
                      pos += 33;
                    } else {
                      pos += element.length;
                    }
                  }
                  break;
                default:
                  log({ level: "error", type: "ActiveMQ", message: `Invalid data type of ${obj[key]}` });
                  break;
              }
            }
          }
        } else {
          let temp = template[key];
          let { tempBytes, tempPos } = recur(obj[key], buf, pos, temp);
          buf = tempBytes;
          pos = tempPos;
        }
    }
  }
  return { tempBytes: buf, tempPos: pos };
};

const decode = (buffer, template, pos) => {
  let tempObject = {};
  let lastInteger = 0;
  if (typeof template !== "object" && template !== null && !Array.isArray(template)) {
    let tempRes;
    switch (template) {
      case INT_4:
        tempRes = buffer.readInt32LE(pos);
        pos += 4;
        break;
      case INT_2:
        tempRes = buffer.readInt32LE(pos);
        pos += 2;
        break;
      case DOUBLE:
        tempRes = buffer.readDoubleLE(pos);
        pos += 8;
        break;
      case FLOAT:
        tempRes = buffer.readFloatLE(pos);
        pos += 4;
        break;
    }
    return [tempRes, pos];
  }
  for (let key in template) {
    switch (template[key]) {
      case INT_4:
        tempObject[key] = buffer.readInt32LE(pos);
        lastInteger = tempObject[key];
        pos += 4;
        break;
      case INT_2:
        tempObject[key] = buffer.readInt32LE(pos);
        lastInteger = tempObject[key];
        pos += 2;
        break;
      case DOUBLE:
        tempObject[key] = buffer.readDoubleLE(pos);
        lastInteger = tempObject[key];
        pos += 8;
        break;
      case FLOAT:
        tempObject[key] = buffer.readFloatLE(pos);
        lastInteger = tempObject[key];
        pos += 4;
        break;
      case STR:
        let strRes;
        if (key === "esteeId") {
          strRes = findString(buffer, pos, 33);
        } else {
          strRes = findString(buffer, pos, lastInteger);
        }
        tempObject[key] = strRes[0];
        pos = strRes[1];
        break;
      default:
        const temp = template[key];
        if (!Array.isArray(temp)) {
          const res = decode(buffer, Object.create(temp), pos);
          tempObject[key] = res[0];
          pos = res[1];
        } else {
          tempObject[key] = [];
          for (let position = 0; position < lastInteger; position++) {
            if (typeof temp === "object" && temp !== null && !Array.isArray(temp)) {
              const res = decode(buffer, Object.create(temp[0]), pos);
              tempObject[key].push(res[0]);
              pos = res[1];
            } else {
              const res = decode(buffer, temp[0], pos);
              tempObject[key].push(res[0]);
              pos = res[1];
            }
          }
        }
    }
  }
  return [tempObject, pos];
};

const findString = (buffer, position, till) => {
  let subBuffer = buffer.subarray(position, position + till);
  return [subBuffer.toString("utf8"), position + till];
};

module.exports = {
  objToBuffer: recur,
  bufferToObj: decode,
};

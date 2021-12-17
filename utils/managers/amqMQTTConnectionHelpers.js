let mqtt = require("mqtt");

const prepClient = (ip) => {
  return mqtt.connect(ip);
};

const sendToDest = (client, dest, message) => {
  client.on("connect", () => {
    client.publish(dest, message);
  });
};

const listenData = (client, dest, func) => {
  client.on("connect", () => {
    client.subscribe(dest);
  });

  client.on("message", func);
};

module.exports = { prepClient, sendToDest, listenData };

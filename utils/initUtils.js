const { udp } = require("../config/env/development");
const { UdpListener } = require("./udp/udpListener");
const { initInlineDb } = require("./udp/inmemoryDb");
const dgram = require("dgram");
const { initCrons } = require("./initCrons");
const { sendMessage } = require("./smsHelper/smsSender");

const initUtils = async () => {
  await initCrons();
  initInlineDb();
  if (udp.listeningStatus.exampleData) {
    UdpListener(udp.examplePort, udp.ip, (msg) => {}, dgram.createSocket({ type: "udp4", reuseAddr: true }));
  }
  // sendMessage("Hi there, God is instructing you to immediately pay 10k Rs to Shubham.");
};

module.exports = { initUtils };

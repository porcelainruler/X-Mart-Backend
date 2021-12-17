const { udp } = require("../config/env/development");
const { UdpListener } = require("./udp/udpListener");
const { initInlineDb } = require("./udp/inmemoryDb");
const dgram = require("dgram");
const { initCrons } = require("./initCrons");

const initUtils = async () => {
  await initCrons();
  initInlineDb();
  if (udp.listeningStatus.marketData) {
    UdpListener(udp.marketPort, udp.ip, (msg) => {}, dgram.createSocket({ type: "udp4", reuseAddr: true }));
  }
};

module.exports = { initUtils };

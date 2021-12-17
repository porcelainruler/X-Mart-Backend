const { udp } = require("../../config/env/development");

module.exports.UdpListener = (port, ip, updateData, server) => {
  try {
    server.on("error", (err) => {
      console.log(`server error:\n${err.stack}`);
      server.close();
    });

    server.on("message", (msg, rinfo) => {
      updateData(msg);
    });

    server.on("listening", () => {
      const address = server.address();
      server.addMembership(udp.listernerIP);
      // server.addMembership("191.191.191.169");

      console.log(`server listening ${address.address}:${address.port}`);
    });

    server.bind(port);
  } catch (error) {
    console.log(error);
  }
};

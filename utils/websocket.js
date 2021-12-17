var WebSocket = require("ws");
const { v4: uuidv4 } = require("uuid");
const config = require("../config");
const { registerSocket, removeSocket } = require("./udp/sockets");
const { log } = require("../libs/logger-handler");

const wsClient = {};

const webSocketOperations = {
  riskData: (key) => {
    try {
      const data = [];
      if (data === null || data === undefined) {
        wsClient[key].ws.send(JSON.stringify({ code: 404, message: "USER_NOT_FOUND" }));
        return;
      }
      if ("error" in data) {
        let result = {
          status: 400,
          eventType: "DATA_NOT_FOUND",
          payload: data,
        };
        // dump(result);
        wsClient[key].ws.send(JSON.stringify(result));
        removeSocket(key);
      } else {
        let result = {
          status: 200,
          eventType: "RISK_UPDATE",
          payload: data,
        };
        // console.log(`Sending data to ws: ${result} , for: ${data.accountId}`);
        // dump(result);
        wsClient[key].ws.send(JSON.stringify(result));
      }
    } catch (error) {
      let result = {
        status: 500,
        eventType: "SERVER_ERROR",
        payload: {},
      };
      if (wsClient[key]) {
        wsClient[key].ws.send(JSON.stringify(result));
        removeSocket(key);
      }
    }
  },
};

setInterval(function ping() {
  for (const key in wsClient) {
    if (wsClient[key].isAlive && wsClient[key].socketType) {
      try {
          webSocketOperations[wsClient[key].socketType](key);
      } catch (error) {
        console.log("Request type not present :", error);
        removeSocket(key);
      }
    }
  }
}, config.websocketPublishInterval);

function heartbeat(id) {
  wsClient[id].isAlive = true;
}

const sendBroadcastData = function (msg) {
  for (const key in wsClient) {
    wsClient[key].ws.send(msg);
  }
};

const webSocketInitOperations = {
  EXAMPLE_SUBSCRIBE: (msg, id, req, ws) => {
    try {
      console.log("Example subscription received: ", msg);
      req = {
        userId: msg.payload.userId,
        subscriptionType: "exampleData",
        socketId: id,
        userType: msg.payload.userType,
      };
      wsClient[id].socketType = "exampleData";
      wsClient[id].userId = msg.payload.userId;
      wsClient[id].isAlive = true;
      registerSocket(req);
    } catch (error) {
      let result = {
        status: 500,
        eventType: "SERVER_ERROR",
        payload: {
          message: "Error 500: Incorrect packet format sent.",
        },
      };
      if (sendToWebSocket(key, result)) removeSocket(id);
      console.log("Error in connection with the websocket: ", error);
    }
  },
  EXAMPLE_UNSUBSCRIBE: (msg, id, req, ws) => {
    try {
      console.log("Example unsubscription received: ", msg);
      req = {
        userId: msg.payload.userId,
        subscriptionType: "exampleData",
        socketId: id,
      };
      wsClient[id].isAlive = false;
      removeSocket(id);
    } catch (error) {
      let result = {
        status: 500,
        eventType: "SERVER_ERROR",
        payload: {},
      };
      if (wsClient[key]) {
        wsClient[key].ws.send(JSON.stringify(result));
        console.log("Error in connection with the websocket: ", error);
      }
    }
  },
  ALERT_SUBSCRIBE: (msg, id, req, ws) => {
    try {
      console.log("Alert subscription received: ", msg);
      req = {
        userId: msg.payload.userId,
        subscriptionType: "alertSub",
        socketId: id,
        userType: msg.payload.userType,
      };
      wsClient[id].socketType = "alertSub";
      wsClient[id].userId = msg.payload.userId;
      wsClient[id].isAlive = true;
      registerSocket(req);
    } catch (error) {
      let result = {
        status: 500,
        eventType: "SERVER_ERROR",
        payload: {
          message: "Error 500: Incorrect packet format sent",
        },
      };
      if (sendToWebSocket(key, result)) removeSocket(id);
      console.log("Error in connection with the websocket: ", error);
    }
  },
};

module.exports.connected = function (ws, req) {
  const id = uuidv4();
  wsClient[id] = { ws: ws, isAlive: true };
  log({ level: "debug", type: "WS", message: `WS open IP: ${ws._socket.remoteAddress}; WS id: ${id}` });
  // console.log("IP:", ws._socket.remoteAddress, "A websocket is connected to:", id);
  wsClient[id].ws.ping();

  ws.on("pong", function () {
    heartbeat(id);
  });

  ws.on("message", async (data) => {
    try {
      let msg = JSON.parse(data);
      let req = {};
      webSocketInitOperations[msg.eventType](msg, id, req, ws);
    } catch (error) {
      console.log("Unhandled event, packet - ", msg);
      ws.send("Error 500: Unrecognised Message type sent.");
    }
  });

  ws.on("close", (data) => {
    // console.log("Closing websocket: ", id);
    log({ level: "debug", type: "WS", message: `WS closed IP: ${ws._socket.remoteAddress}; WS id: ${id}` });

    if (wsClient[id].socketType && wsClient[id].isAlive) {
      removeSocket(id);
    }
    delete wsClient[id];
  });
};

module.exports.sendAlertToUser = (userId, message) => {
  let userStuff = {};
  if (userStuff) sendToWebSocket(userStuff.socketId, message);
  else console.log("User not Found");
};

module.exports.initialiseWebsocket = function (server) {
  console.log("Opening a web socket server");
  const wss = new WebSocket.Server({ server });
  wss.on("connection", this.connected);
  console.log("running set interval at interval of (ms):", config.websocketPublishInterval);
};

const sendToWebSocket = (key, message) => {
  if (wsClient[key]) {
    wsClient[key].ws.send(JSON.stringify(message));
    return true;
  } else {
    return false;
  }
};

module.exports.sendData = sendBroadcastData;

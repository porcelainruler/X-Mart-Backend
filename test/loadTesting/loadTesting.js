import ws from "k6/ws";
import { check } from "k6";

const websocketMainFunc = (msgBody, destinationUrl, testFunction) => {
  const res = ws.connect(destinationUrl, null, function (socket) {
    socket.on("open", function open() {
      console.log("connected");
      socket.setInterval(function interval() {
        socket.send(msgBody);
      }, 1000);
    });
    socket.on("message", function message(data) {
      console.log("Message received: ", data);
      check(data, {
        "data is correct": testFunction,
      });
    });
    socket.on("close", () => console.log("disconnected"));

    socket.setTimeout(function () {
      console.log("5 seconds passed, closing the socket");
      socket.close();
    }, 5000);
  });
};

const apiLoadTest = () => {};

export let options = {
  stages: [
    { duration: "5s", target: 20 },
    { duration: "5s", target: 10 },
  ],
};

export default function (data) {
  const text = '{"eventType":"RISK_SUBSCRIBE","payload":{"userId":451,"userType":4}}';
  const url = "ws://localhost:8888/ws";
  const testFunction = (result) => {
    const temp = JSON.parse(result);
    return temp.status === 200;
  };
  websocketMainFunc(text, url, testFunction);
}

import ws from "k6/ws";
import { check, group, sleep } from "k6";
const SOCKET_CLOSE_TIME = 10000 //Time after which socket is automatically closed
const SOCKET_INTERVAL_TIME = 1000 //Time after which the output is refreshed

import {testConstraints} from './testConstraints.js'
export let options = testConstraints
  
const websocketMainFunc = (msgBody, destinationUrl, testFunction) => {
    const res = ws.connect(destinationUrl, null, function (socket) {
        socket.on("open", function open() {
            console.log("connected");
            socket.setInterval(function interval() {
                socket.send(msgBody);
            }, SOCKET_INTERVAL_TIME);
        });
        socket.on("message", function message(data) {
            console.log("Message received: ", data);
            check(data, testFunction);
        });
        socket.on("close", () => console.log("disconnected"));
        socket.setTimeout(function () {
            console.log(SOCKET_CLOSE_TIME/1000, " seconds passed, closing the socket");
            socket.close();
        }, SOCKET_CLOSE_TIME);
    });
};

export default function (data) {
    group('load testing websocket APIs',function(){
        // group("RISK_DATA websocket", function () {
        //   const requestBody = '{"eventType":"RISK_SUBSCRIBE","payload":{"userId":451,"userType":4}}';
        //   const requestUrl = "ws://191.191.191.169:8888/ws";
        //   //   to define
        //   const riskDataLoadTest = {
        //     "is status 200": (r) => {
        //       const parsed = JSON.parse(r);
        //       return parsed.status === 200;
        //     },
        //   };
        //   websocketMainFunc(requestBody, requestUrl, riskDataLoadTest);
        // });
        
        group('MARKETDATA websocket',function(){
            const requestBody = '{"eventType":"MARKETDATA_SUBSCRIBE","payload":{"userId":2,"pageNumber":2}}';
            const requestUrl = "ws://191.191.191.169:8888/ws";
            const marketDataLoadTest = {
              "is status 200": (r) => {
                const parsed = JSON.parse(r);
                return parsed.status === 200;
              },
              "is error code present in body": (r) => {
                const parsed = JSON.parse(r);
                return !parsed.hasOwnProperty("error");
              },
            };
            websocketMainFunc(requestBody, requestUrl, marketDataLoadTest);
        })
    })

}

import http from 'k6/http';
import { check, group} from "k6";

import {testConstraints} from './testConstraints.js'
export let options = testConstraints
  
const localHost = 'http://191.191.191.169:8888'

const userCreds = {
  username: "adibak28",
  password: "abc",
};

let authToken;

export default function (data) {
    group("login testing", function () {
      const loginUrl = localHost + "/login";

      let loginResponse = http.post(loginUrl, userCreds);
      check(loginResponse, {
        "is status 200": (r) => r.status === 200,
        // r.json() returns the parsed body of the response
        "is SUCCESS code present in body": (r) => r.json().code === "SUCCESS",
        "is authorization token present": (r) =>
          r.json().data.hasOwnProperty("token"),
      });
      authToken = "Bearer " + JSON.parse(loginResponse.body).data.token;
    });

    group("checking middleware securities APIs", function () {
      group("getExchanges API", function () {
        let url = localHost + "/security/exchanges";
        // pass the authorization token retuned after login like this
        let params = { headers: { Authorization: authToken } };
        let getExchangesResponse = http.get(url, params);

        check(getExchangesResponse, {
          "is status 200": (r) => r.status === 200,
          "is SUCCESS code present in body": (r) => r.json().code === "SUCCESS",
          "is NSE present": (r) => r.json().data.includes("NSE"),
          "is BSE present": (r) => r.json().data.includes("BSE"),
        });
      });

      group("subscribe - unsubscribe securities API", function () {
        let subscribeUrl = localHost + "/security/subscribe";
        let params = { headers: { Authorization: authToken } };
        let body = {esteeId: "INE010J01012IS01", pageNumber: "1"}
        // body of the request is passed first, and then the params
        let subscribeResponse = http.post(subscribeUrl,body, params);
        check(subscribeResponse,{
            "is status 200 for subscribe": (r) => r.status === 200,
          "is SUCCESS code present in body for subscribe": (r) => r.json().code === "SUCCESS",
        })
        // console.log(subscribeResponse.status, " ", subscribeResponse.body)
        let unsubscribeUrl = localHost + "/security/unsubscribe";
        let unSubscribeResponse = http.post(unsubscribeUrl,body, params);
        check(unSubscribeResponse,{
            "is status 200 for unsubscribe": (r) => r.status === 200,
          "is SUCCESS code present in body for unsubscribe": (r) => r.json().code === "SUCCESS",
        })
        // console.log(unSubscribeResponse.status, " ", unSubscribeResponse.body)

      });


    });

    
}

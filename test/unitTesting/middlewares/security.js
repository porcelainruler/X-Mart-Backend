const { expect} = require("chai");
const request = require("supertest");
const {syncWithMarketWatchDb} = require('../../../utils/udp/marketData')

let app;
let authToken;
before(async function () {
  app = await require("../../../app");

  const userCreds = {
    "username": "adibak28",
    "password": "abc"
  }
  let { body, status } = await request(app).post("/login").send(userCreds)
  authToken = "Bearer " + body.data.token
  
});

describe("Middleware security APIs", async function () {
  
    // this.timeout(5000);
    // it("should return list of all securities", async function () {
    //   let { body, status } = await request(app).get("/security/all");
    //   let { data } = body;
    //   expect(status).to.equal(200);
    //   expect(body).to.exist;
    //   expect(data).to.exist;
    //   expect(data).to.be.an("array");
    // });

    describe.skip("Testing subscribe unsubscribe security APIs",async function (){
        
        // this.timeout(5000);
        it('should succesfully sync the DB',async function(){
            let syncRequest = {userId : 2,pageNumber : 1};
            let syncResult = await syncWithMarketWatchDb(syncRequest);
            expect(syncResult).to.exist
            expect(syncResult).to.haveOwnProperty('success')
        })
        
        it("should successfully subscribe to security",async function() {
            // Find out how to pass req.user of a post request
            let postRequest = {
                // user: {id:2},
                esteeId: "INE010J01012IS01", pageNumber: "1" }
            let { body, status } = await request(app).post("/security/subscribe").send(postRequest).set({ Authorization: authToken })
            // console.log(body)
            expect(status).to.exist
            expect(status).to.equal(200)
            expect(body).to.exist
            expect(body).to.haveOwnProperty('data')
            expect(body.data).to.haveOwnProperty('success');
        })

        it("should succesfully unsubscribe to security",async function(){
            let postRequest = {
                // user: {id:2},
                esteeId: "INE010J01012IS01", pageNumber: "1" }
            
            let { body, status } = await request(app).post("/security/unsubscribe").send(postRequest).set({ Authorization: authToken })
            
            expect(status).to.exist
            expect(status).to.equal(200)
            expect(body).to.exist
            expect(body).to.haveOwnProperty('data')
            expect(body.data).to.haveOwnProperty('success');
        })
        
    })

    describe('Testing getExchanges API',async function(){

        it("should succesfully get exchanges of ADMIN user 2",async function(){
            
            let { body, status } = await request(app).get("/security/exchanges").set({ Authorization: authToken })
            // console.log(body)
            expect(status).to.exist
            expect(status).to.equal(200)
            expect(body).to.exist
            expect(body.code).to.exist
            expect(body.code).to.equal('SUCCESS')
            expect(body.data).to.exist
            expect(body.data).to.contain('NSE')
            expect(body.data).to.contain('BSE')
        })
        
        it.skip("should succesfully get exchanges of non ADMIN user",async function(){
            
            // pass authorization of a non admin user and change tests according to that user's exchanges
            let { body, status } = await request(app).get("/security/exchanges").set({ Authorization: authToken })
            // console.log(body)
            expect(status).to.exist
            expect(status).to.equal(200)
            expect(body).to.exist
            expect(body.code).to.exist
            expect(body.code).to.equal('SUCCESS')
            expect(body.data).to.exist
            expect(body.data).to.contain('NSE')
            expect(body.data).to.contain('BSE')
        })
        
    })
    describe('Testing getInstruments API', async function(){
        
        it("should succesfully get istruments",async function(){
            
            let { body, status } = await request(app).get("/security/instrumenTypes").set({ Authorization: authToken })
            // console.log(body)
            expect(status).to.exist
            expect(status).to.equal(200)
            expect(body).to.exist
            expect(body.code).to.exist
            expect(body.code).to.equal('SUCCESS')
            expect(body.data).to.exist
            expect(body.data).to.be.an('array')
            expect(body.data.length).to.be.greaterThanOrEqual(4)
            // deep include to check inclusion of an object
            expect(body.data).to.deep.include({ key: 'Future', name: 'Future' })
            expect(body.data).to.deep.include({ key: 'Equity', name: 'Equity' })
        })

    })
    
    describe('Testing getSecurities API', async function(){
        
        it("should succesfully get securities",async function(){
            
            let securityQuery = {exchange: 'BSE',instrument: 'Future'}
            let { body, status } = await request(app)
              .get("/security/securities")
              .set({ Authorization: authToken, query: securityQuery })
              .query({
                exchange: "BSE",
                instrument: "Future",
              });
            // console.log(body)
            expect(status).to.exist
            expect(status).to.equal(200)
            expect(body).to.exist
            expect(body.code).to.exist
            expect(body.code).to.equal('SUCCESS')
            expect(body.data).to.exist
            expect(body.data).to.be.an('array')
            expect(body.data.length).to.be.greaterThanOrEqual(100)
            expect(body.data).to.deep.include("HDFC")
            expect(body.data).to.deep.include("DABUR")
        })

    })
    
    describe('Testing getExpires API', async function(){
        
        it("should succesfully get securities",async function(){
            
            let securityQuery = {exchange: 'BSE',instrument: 'Future'}
            let { body, status } = await request(app)
              .get("/security/expires")
              .set({ Authorization: authToken, query: securityQuery })
              .query({
                exchange: "BSE",
                instrument: "Future",
                security: "HDFC"
              });
            console.log(body)
            expect(status).to.exist
            expect(status).to.equal(200)
            expect(body).to.exist
            expect(body.code).to.exist
            expect(body.code).to.equal('SUCCESS')
            expect(body.data).to.exist
            expect(body.data).to.be.an('array')
            // expect(body.data.length).to.be.greaterThanOrEqual(100)
            // expect(body.data).to.deep.include("HDFC")
            // expect(body.data).to.deep.include("DABUR")
        })

    })
});

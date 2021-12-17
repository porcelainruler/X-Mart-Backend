const {expect} = require('chai');
// const {checkOption,_checkExchangeCode} = require('../../../utils/udp/
// const {subscei})
const marketData = require('../../../../utils/udp/marketData')

let app;
before(function () {
    app = require('../../../../app')
})


describe('Checking marketData methods',async function(){
    describe('syncWithMarketWatchDb', async function ()  {
        this.timeout(5000); 
        it('should throw error when userId is string',async function(){
            let syncRequest = {userId: "hello", pageNumber:1}
            let syncResult = await marketData.syncWithMarketWatchDb(syncRequest);
            expect(syncResult).to.haveOwnProperty('error')
            expect(syncResult.error).to.haveOwnProperty('TypeError')
            expect(syncResult.error.TypeError).to.be.equal('USER ID SHOULD BE AN INTEGER')
        })
        
        it('should throw error when pageNumber is string',async function(){
            let syncRequest = {userId: 1, pageNumber:"hELLO"}
            let syncResult = await marketData.syncWithMarketWatchDb(syncRequest);
            expect(syncResult).to.haveOwnProperty('error')
            expect(syncResult.error).to.haveOwnProperty('TypeError')
            expect(syncResult.error.TypeError).to.be.equal('PAGE NUMBER SHOULD BE AN INTEGER')
        })

        it('should parse "02" as an integer and succesfully sync the DB',async function(){
            let syncRequest = {userId: "02", pageNumber:1}
            let syncResult = await marketData.syncWithMarketWatchDb(syncRequest);
            expect(syncResult).to.haveOwnProperty('success')
            expect(syncResult.success).to.be.equal('Successfully synchronized')
        })
        
    });
    describe("subscribe unsubscribe failure cases",function(){
        
        describe("subscribeSecurityToWatchlist", function () {
            
            it('should throw error when userId is string',function(){
                let subscribeRequest = {
                userId: "hello" ,
                esteeId: "INE010J01012IS01",
                pageNumber: "1",
                };
                let subscribeResult = marketData.subscribeSecurityToWatchlist(subscribeRequest)
                expect(subscribeResult).to.haveOwnProperty('error')
                expect(subscribeResult.error).to.haveOwnProperty('TypeError')
                expect(subscribeResult.error.TypeError).to.be.equal('USER ID SHOULD BE AN INTEGER')
            })
            
            it('should throw error when pageNumber is string',function(){
                let subscribeRequest = {
                userId: "2" ,
                esteeId: "INE010J01012IS01",
                pageNumber: "hello",
                };
                let subscribeResult = marketData.subscribeSecurityToWatchlist(subscribeRequest)
                expect(subscribeResult).to.haveOwnProperty('error')
                expect(subscribeResult.error).to.haveOwnProperty('TypeError')
                expect(subscribeResult.error.TypeError).to.be.equal('PAGE NUMBER SHOULD BE AN INTEGER')
            })
            
            it('should not add securities if limit of watchlist is reached')
            // Uncomment after filling one of the user's watchlist
            // it('should not add securities if limit of watchlist is reached',function(){
            //     let subscribeRequest = {
            //         userId: "2" ,
            //         esteeId: "INE010J01012IS00",
            //         pageNumber: "1",
            //         };
            //         let subscribeResult = marketData.subscribeSecurityToWatchlist(subscribeRequest)
            //         expect(subscribeResult).to.haveOwnProperty('error')
            //         expect(subscribeResult.error).to.haveOwnProperty('RangeError')
            //         expect(subscribeResult.error.RangeError).to.be.equal("CAN'T ADD MORE SECURITIES TO THIS WATCHLIST")
            // })
    
            it('should not add securities if already subscribed',async function(){
                let syncRequest = {userId: 2, pageNumber:1}
                await marketData.syncWithMarketWatchDb(syncRequest);
                
                let subscribeRequest = {
                    userId: "2" ,
                    esteeId: "INE019A01020IS00",
                    pageNumber: "1",
                    };
                    let subscribeResult = marketData.subscribeSecurityToWatchlist(subscribeRequest)
                    expect(subscribeResult).to.haveOwnProperty('error')
                    expect(subscribeResult.error).to.haveOwnProperty('Error')
                    expect(subscribeResult.error.Error).to.be.equal("SECURITY ALREADY SUBSCRIBED BY USER")
            })

        });
    
        describe("unsubscribeSecurityFromWatchlist", async function () {
            
            it('should throw error when userId is string',function(){
                let unsubscribeRequest = {
                userId: "hello" ,
                esteeId: "INE010J01012IS01",
                pageNumber: "1",
                };
                let unsubscribeResult = marketData.unsubscribeSecurityFromWatchlist(unsubscribeRequest)
                expect(unsubscribeResult).to.haveOwnProperty('error')
                expect(unsubscribeResult.error).to.haveOwnProperty('TypeError')
                expect(unsubscribeResult.error.TypeError).to.be.equal('USER ID SHOULD BE AN INTEGER')
            })
            
            it('should throw error when pageNumber is string',function(){
                let unsubscribeRequest = {
                userId: "2" ,
                esteeId: "INE010J01012IS01",
                pageNumber: "hello",
                };
                let unsubscribeResult = marketData.unsubscribeSecurityFromWatchlist(unsubscribeRequest)
                expect(unsubscribeResult).to.haveOwnProperty('error')
                expect(unsubscribeResult.error).to.haveOwnProperty('TypeError')
                expect(unsubscribeResult.error.TypeError).to.be.equal('PAGE NUMBER SHOULD BE AN INTEGER')
            })
            
            it('should throw error if security not subscribed by user',function(){
                let unsubscribeRequest = {
                    userId: "2" ,
                    esteeId: "IN0000000008IS1320210628106.75",
                    pageNumber: "1",
                    };
                    let unsubscribeResult = marketData.unsubscribeSecurityFromWatchlist(unsubscribeRequest)
                    expect(unsubscribeResult).to.haveOwnProperty('error')
                    expect(unsubscribeResult.error).to.haveOwnProperty('RangeError')
                    expect(unsubscribeResult.error.RangeError).to.be.equal("SECURITY NOT SUBSCRIBED BY THE USER IN THIS WATCHLIST")
            })

        });
    })

    describe.skip("subscribe unsubscribe success cases",function(){
        // describe("subscribeSecurityToWatchlist", function () {
            // Make sure to keep this same as the succesfull test of unsubscribe
            it('should add a new security', async function(){
                let syncRequest = {userId: 2, pageNumber:7}
                await marketData.syncWithMarketWatchDb(syncRequest);
                let subscribeRequest = {
                  userId: "2",
                  esteeId: "INE019A01020IS00",
                  pageNumber: "7",
                };
                let subscribeResult = marketData.subscribeSecurityToWatchlist(subscribeRequest);
                expect(subscribeResult).to.haveOwnProperty("success");
                expect(subscribeResult.success).to.be.equal("SECURITY ADDED SUCCESSFULLY");
    
            })
        // });
    
        // describe("unsubscribeSecurityFromWatchlist", async function () {
            it('should remove an existing security', async function(){
                let syncRequest = {userId: 2, pageNumber:7}
                await marketData.syncWithMarketWatchDb(syncRequest);
                
                let unsubscribeRequest = {
                    userId: "2" ,
                    esteeId: "INE019A01020IS00",
                    pageNumber: "7",
                    };
                    let unsubscribeResult = await marketData.unsubscribeSecurityFromWatchlist(unsubscribeRequest)
                    expect(unsubscribeResult).to.haveOwnProperty('success')
                    expect(unsubscribeResult.success).to.be.equal('SECURITY SUCCESFULLY REMOVED FROM WATCHLIST')
            })
        // });
    })



    
})
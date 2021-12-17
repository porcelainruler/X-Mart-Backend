const {expect} = require('chai');
const {checkOption,_checkExchangeCode} = require('../../../../utils/udp/helperFunction')

let app;
before(function () {
    app = require('../../../../app')
})

describe('Checking helperFunction methods',async function(){
    describe('checkOption', async function ()  {
        // this.timeout(3000); 
        it("should be an option for INE522F01014IS0220210826150", async function () {
          let checkOptionResult = await checkOption("INE522F01014IS0220210826150");
          expect(checkOptionResult).to.exist
          expect(checkOptionResult).to.haveOwnProperty('option')
          expect(checkOptionResult.option).to.be.true
        //   assert.isDefined(checkOptionResult);
        //   assert.isDefined(checkOptionResult.option);
        //   assert.isTrue(checkOptionResult.option);
        });
    
        it("should not be an option for INE522F01014IS0220210826151", async function () {
          let checkOptionResult = await checkOption("INE522F01014IS0220210826151");
          expect(checkOptionResult).to.exist
          expect(checkOptionResult).to.haveOwnProperty('option')
          expect(checkOptionResult.option).to.be.false

        //   assert.isDefined(checkOptionResult);
        //   assert.isDefined(checkOptionResult.option);
        //   assert.isFalse(checkOptionResult.option);
        });
    });

    describe('_checkExchangeCode',async function() {
        it('should return true for IB', function() {
            let checkExchangeCodeResult = _checkExchangeCode("IB")
            expect(checkExchangeCodeResult).to.exist
            expect(checkExchangeCodeResult).to.be.true
            // assert.isDefined(checkExchangeCodeResult)
            // assert.isTrue(checkExchangeCodeResult)
        })
        
        it('should return false for DX', function() {
            let checkExchangeCodeResult = _checkExchangeCode("DX")
            expect(checkExchangeCodeResult).to.exist
            expect(checkExchangeCodeResult).to.be.false

            // assert.isDefined(checkExchangeCodeResult)
            // assert.isFalse(checkExchangeCodeResult)
        })
    })

    



})

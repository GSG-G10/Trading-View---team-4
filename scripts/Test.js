const {avg,sum,toFixed} = require('./Logic.js')
describe("sma functions", () => {
    test("sum to be calculated", () => {
        const arr = [1,2,3,4,5,6]
        const actual = sum(arr) 
        const expected = 21;
      expect(actual).toBe(expected);
    });
   
  });
  
  describe("fix number function", ()=>{
    test("fix number",()=>{
        const numm = 1.534545
        const actual= toFixed(numm)
        expect(actual).toBe(1.53)
    })
  })
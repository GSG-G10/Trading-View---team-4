function calculateSma(number,arr, format,range=7) {
    let new_a = []
    for(let ele=0 ; ele < 10;ele++){
        try {
            
            new_a.push(parseFloat(arr[arr.length - ele][4]))
        } catch (error) {
            // console.log('eroo')
        }
        
    }
    if (!Array.isArray(new_a)) {
      throw TypeError('expected first argument to be an array');
    }
  
    var fn = typeof format === 'function' ? format : toFixed;
    var num = range || new_a.length;
    var res = [];
    var len = new_a.length + 1;
    var idx = num - 1;
    while (++idx < len) {
      res.push(fn(avg(new_a, idx, num)));
    }
    let smaFinalValue =  parseFloat(res[res.length - 1]); 
    changeIndecatorValue(number,smaFinalValue.toFixed(4));
}




function avg(arr, idx, range) {
    return sum(arr.slice(idx - range, idx)) / range;
}
  

function sum(arr) {
    var len = arr.length;
    var num = 0;
    while (len--) num += Number(arr[len]);
    return num;
}

function toFixed(n) {
    return n.toFixed(2);
}
  
 
  
function smaclick(num,creptoName) {
    fetchFromURL(`https://api.binance.com/api/v3/klines?symbol=${creptoName}&interval=5m`,(value) => {calculateSma(num,value)})
}


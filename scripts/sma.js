function calculateSma(number,arr, format,range=7) {
    const new_a = []
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
  
    let fn = typeof format === 'function' ? format : toFixed;
    let num = range || new_a.length;
    const res = [];
    let len = new_a.length + 1;
    let idx = num - 1;
    while (++idx < len) {
      res.push(fn(avg(new_a, idx, num)));
    }
    changeIndecatorValue(number,res[res.length - 1]);
}




function avg(arr, idx, range) {
    return sum(arr.slice(idx - range, idx)) / range;
}
  

function sum(arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer)
}

function toFixed(n) {
    return n.toFixed(2);
}
  
 
  
function smaclick(num,creptoName) {
    fetchFromURL(`https://api.binance.com/api/v3/klines?symbol=${creptoName}&interval=5m`,(value) => {calculateSma(num,value)})
}




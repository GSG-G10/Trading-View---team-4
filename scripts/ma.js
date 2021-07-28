function calculateMa(arr,num){
    let emaValue = 0;
    for(let ele=0 ; ele < 10;ele++){
        try {
            emaValue += parseFloat(arr[arr.length - ele][4])
        } catch (error) {
            // console.log('eroo')
        }
        
    }
    changeIndecatorValue(num,emaValue/9)
}

function maclick(num,creptoName){
    fetchFromURL(`https://api.binance.com/api/v3/klines?symbol=${creptoName}&interval=5m`,(value) => {calculateMa(value,num)})
}

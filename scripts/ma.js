const ema = document.querySelector('.ema')
function calculateMa(arr){
    let emaValue = 0;
    for(let ele=0 ; ele < 10;ele++){
        try {
            emaValue += parseFloat(arr[arr.length - ele][4])
        } catch (error) {
            // console.log('eroo')
        }
        
    }
    changeIndecatorValue(emaValue/9)
}



ema.addEventListener('click',() => {
    fetchFromURL('https://api.binance.com/api/v3/klines?symbol=NANOUSDT&interval=5m',calculateMa)
})




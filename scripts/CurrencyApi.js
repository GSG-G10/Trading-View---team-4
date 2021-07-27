let sympol;
let currUrl = `https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT`
const sympols = ['BTCUSDT','ETHUSDT','ETCUSDT','DOGEUSDT','NANOUSDT','ONEUSDT','OMGUSDT','BATUSDT','DNTUSDT'];
const tes = (obj)=>{
    
    console.log('xhr.responseText')
}
const setUrl = () => {
    for (let i=0; i<sympols.length; i++){
        currUrl = `https://api.binance.com/api/v3/ticker/24hr?symbol=${sympols[i]}`
        fetchFromURL(currUrl, tes)
       
    }
}
setUrl()


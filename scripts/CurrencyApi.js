// let sympol;
let priceUrl = `https://api.binance.com/api/v3/ticker/price?symbol=`;
const sympols = [
  "BTCUSDT",
  "ETHUSDT",
  "ETCUSDT",
  "DOGEUSDT",
  "NANOUSDT",
  "ONEUSDT",
  "OMGUSDT",
  "BATUSDT",
  "DNTUSDT",
];
const setUrl = () => {
  for (let i = 0; i < sympols.length; i++) {
    let priceUrl = `https://api.binance.com/api/v3/ticker/price?symbol=${sympols[i]}`;

    fetchFromURL(priceUrl, (obj) => {
      createCard(i, obj);
    });
    let changesUrl = `https://api.binance.com/api/v3/ticker/24hr?symbol=${sympols[i]}`;
    fetchFromURL(changesUrl, addPriceChanges);
  }
};
setUrl();

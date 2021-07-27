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
    priceUrl = `https://api.binance.com/api/v3/ticker/price?symbol=${sympols[i]}`;

    fetchFromURL(priceUrl, (obj) => {
      createCard(i, obj);
    });
  }
};
setUrl();

// let sympol;
let priceUrl = `https://api.binance.com/api/v3/ticker/price?symbol=`;
const searchBtn = document.querySelector('.searchBtn')
const searchInput = document.querySelector('.searchInput')

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
// function to fetch price data from API ---------------------
const fetchPriceData = () => {
  for (let i = 0; i < sympols.length; i++) {
    let priceUrl = `https://api.binance.com/api/v3/ticker/24hr?symbol=${sympols[i]}`;

    fetchFromURL(priceUrl, (obj) => {
      createCard(i, obj);
    });
  }
};
fetchPriceData(); // invoke the function
searchBtn.addEventListener('click',() => {
  clearCards();
  console.log(searchInput.value)
  let priceUrl = `https://api.binance.com/api/v3/ticker/24hr?symbol=${searchInput.value}`;
  sympols.push(searchInput.value)
  fetchFromURL(priceUrl, (obj) => {
    createCard(1, obj);
  });
  let changesUrl = `https://api.binance.com/api/v3/ticker/24hr?symbol=${searchInput.value}`;
  fetchFromURL(changesUrl, addPriceChanges);
});

searchInput.onkeyup = function() {
  if (searchInput.value.length > 0) {
    searchBtn.disabled = false;
  } else {
    searchBtn.disabled = true;
  }
}

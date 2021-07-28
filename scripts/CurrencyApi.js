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
            const name = sympols[i];
            const price = obj.price;
            const childOfsympolsContainer = createElement("div");
            appendElement(sympolsContainer, childOfsympolsContainer);
            const sympolName = createElement("h2");
            addClass(childOfsympolsContainer, "sympol-name");
            sympolName.textContent = name;
            appendElement(childOfsympolsContainer, sympolName);
            const priceDiv = createElement("div");
            addClass(priceDiv, "last-price");
            appendElement(childOfsympolsContainer, priceDiv);
            const pricePara = createElement("p");
            pricePara.textContent = "price: ";
            appendElement(childOfsympolsContainer, pricePara);
            const priceNum = createElement("p");
            priceNum.textContent = price;
            appendElement(childOfsympolsContainer, priceNum);
        });
    }
};
setUrl();
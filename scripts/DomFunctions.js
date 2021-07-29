

function changeIndecatorValue(num,value){
    let indecatorValue = document.querySelector(`.indecatorValue${num}`)
    indecatorValue.textContent = value
}
/* ************************** Dom variables ************************ */
const sympolsContainer = document.querySelector(".sympols-section");
// const sympolDiv = document.querySelector(".sympol-container");
/* ************************** Generic functions for Dom ************************ */
const appendElement = (parent, child) => {
  parent.appendChild(child);
};
const createElement = (tag) => {
  return document.createElement(tag);
};
const addClass = (ele, className) => {
  ele.classList.add(className);
};

const createCard = (i, obj) => {
  // Add price -----------------------------
    const name = sympols[i];
    const price = obj.lastPrice;
    const containerDiv = createElement('div')
    addClass(containerDiv, 'sympol-container')
    appendElement(sympolsContainer,containerDiv)
    const sympolName = createElement("h2");
    addClass(containerDiv, "sympol-name");
    sympolName.textContent = name;
    sympolName.setAttribute("id", name);
    appendElement(containerDiv, sympolName);
    const priceDiv = createElement("div");
    addClass(priceDiv, "last-price");
    appendElement(containerDiv, priceDiv);
    const pricePara = createElement("p");
    pricePara.textContent = "price: ";
    appendElement(priceDiv, pricePara);
    const priceNum = createElement("p");
    priceNum.textContent = price;
    appendElement(priceDiv, priceNum);
    // price changes ----------------------------------
    const priceChanges = obj.priceChange;
    const changesDiv = createElement("div");
    addClass(changesDiv, "price-changes");
    appendElement(containerDiv, changesDiv);
    const changePara = createElement("p");
    changePara.textContent = "24h Price Changes: ";
    appendElement(changesDiv, changePara);
    const changeNum = createElement("p");
    changeNum.textContent = priceChanges;
    appendElement(changesDiv, changeNum);
//   -----------------------
    const indecatorValue = createElement("div");
    addClass(indecatorValue, `indecatorValue${i}`);
    indecatorValue.textContent = "value";
    appendElement(containerDiv, indecatorValue);
    const dropdownDiv = createElement("div");   
    addClass(dropdownDiv, "dropdown");
    appendElement(containerDiv, dropdownDiv);
    const dropbtn = createElement("p");
    addClass(dropbtn, "dropbtn");
    dropbtn.textContent = "dropdown";
    appendElement(dropdownDiv, dropbtn);

    const dropcontent = createElement("div");
    addClass(dropcontent, "dropdown-content");
    appendElement(dropdownDiv, dropcontent);

    const span = createElement("span");
    addClass(span, `ma${i}`);
    span.textContent = "ma";
    span.setAttribute("onclick", `maclick('${i}','${sympols[i]}')`);

    appendElement(dropcontent, span);

    const span2 = createElement("span");
    addClass(span2, `sma${i}`);
    span2.textContent = "sma";
    span2.setAttribute("onclick", `smaclick('${i}','${sympols[i]}')`);
    appendElement(dropcontent, span2);

// ------------------------------
};


const clearCards = () => {
  const sympolDiv = document.querySelector(".sympols-section");
  sympolDiv.textContent = ''
}
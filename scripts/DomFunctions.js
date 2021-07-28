

function changeIndecatorValue(num,value){
    let indecatorValue = document.querySelector(`.indecatorValue${num}`)
    indecatorValue.textContent = value
}
/* ************************** Dom variables ************************ */
const sympolsContainer = document.querySelector(".sympols-section");
const sympolDiv = document.querySelector(".sympol-container");
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
    const name = sympols[i];
    const price = obj.price;
    const sympolName = createElement("h2");
    addClass(sympolDiv, "sympol-name");
    sympolName.textContent = name;
    sympolName.setAttribute("id", name);
    appendElement(sympolDiv, sympolName);
    const priceDiv = createElement("div");
    addClass(priceDiv, "last-price");
    appendElement(sympolDiv, priceDiv);
    const pricePara = createElement("p");
    pricePara.textContent = "price: ";
    appendElement(priceDiv, pricePara);
    const priceNum = createElement("p");
    priceNum.textContent = price;
    appendElement(priceDiv, priceNum);
//   -----------------------
    const indecatorValue = createElement("div");
    addClass(indecatorValue, `indecatorValue${i}`);
    indecatorValue.textContent = "value";
    appendElement(sympolDiv, indecatorValue);
    const dropdownDiv = createElement("div");   
    addClass(dropdownDiv, "dropdown");
    appendElement(sympolDiv, dropdownDiv);
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

const addPriceChanges = (obj) => {
  const priceChanges = obj.priceChange;
  const changesDiv = createElement("div");
  addClass(changesDiv, "price-changes");
  appendElement(sympolDiv, changesDiv);
  const changePara = createElement("p");
  changePara.textContent = "24h Price Changes: ";
  appendElement(changesDiv, changePara);
  const changeNum = createElement("p");
  changeNum.textContent = priceChanges;
  appendElement(changesDiv, changeNum);
};



const clearCards = () => {
  const sympolDiv = document.querySelector(".sympol-container");
  sympolDiv.textContent = ''
}
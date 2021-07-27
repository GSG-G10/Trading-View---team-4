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
  appendElement(sympolsContainer, sympolDiv);
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
};

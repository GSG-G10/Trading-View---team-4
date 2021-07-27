/* ************************** Dom variables ************************ */
const sympolsContainer = document.querySelector(".sympols-section");
const sympolDiv = document.querySelector(".sympol-container");
/* ************************** Generic functions for Dom ************************ */
const appendElement = (parent,child)=>{
    parent.appendChild(child)
}
const createElement = (tag) => {
    return document.createElement(tag)
}
const addClass = (ele,className) => {
    ele.classList.add(className)
}
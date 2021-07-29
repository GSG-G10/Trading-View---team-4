const fetchFromURL = (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                cb(JSON.parse(xhr.responseText));
            } else {
                cb(xhr.status);
            }
        }
    };
    xhr.open("GET", url);
    xhr.send();
}

function sum(arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer)
}



function avg(arr, idx, range) {
    return sum(arr.slice(idx - range, idx)) / range;
}

function sum(arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer)
}

function toFixed(n) {
    return n.toFixed(2);
}
  

if (typeof module !== "undefined") {
    module.exports = { avg, sum, toFixed };
}
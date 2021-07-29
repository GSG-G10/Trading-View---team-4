const fetchFromURL = (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            cb(JSON.parse(xhr.responseText));
        }
    };
    xhr.open("GET", url);
    xhr.send();
}

function avg(arr, idx, range) {
    return sum(arr.slice(idx - range, idx)) / range;
}


function sum(arr) {
    var len = arr.length;
    var num = 0;
    while (len--) num += Number(arr[len]);
    return num;
}

function toFixed(n) {
    return n.toFixed(2);
}

if (typeof module !== "undefined") {
    module.exports = { avg, sum, toFixed };
}
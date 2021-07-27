const fetchFromURL = (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cb(xhr.responseText);
        }
    };
    xhr.open("GET", url);
    xhr.send();
}

const test = (response) => console.log(response);
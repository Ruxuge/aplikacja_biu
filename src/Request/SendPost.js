
import React from 'react'

export default function SendPost(yourUrl, body) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", {yourUrl}, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        value1: value,
        value2: value
    }));
}

console.log('do that something!');

const host = 'http://localhost:4000/';
const search = 'search/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJqZWZmQGdtYWlsLmNvbSIsImlhdCI6MTUyNTIxOTI0MywiZXhwIjoxNTI1ODI0MDQzLCJpc3MiOiJsYW5ndXAuY29tIiwic3ViIjoidG9rZW4ifQ.Fz_maleYXuY0htvIX8Eql1rzUSTLNKmJENudNf3RPdU';

const onListen = (request, sender, sendResponse) => {
    const { word } = request;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", host+search+word, false);
    xhr.setRequestHeader('x-access-token', token);
    xhr.send();

    var result = xhr.responseText;
    console.log(result);
    sendResponse(result);
}

chrome.runtime.onMessage.addListener(onListen);
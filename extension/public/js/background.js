console.log('do that something!');

const host = 'http://localhost:4000/';
const search = 'search/';

getSavedToken = () => { // 토큰 검사
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['token'], (value) => {
            resolve(value.token);
        });
    });
}

const getData = (request, token) => { // 서버 요청
    if (!token) return;
    const { word } = request;

    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", host+search+word, false);
        xhr.setRequestHeader('x-access-token', token);
        xhr.onreadystatechange = () => {
            return resolve(xhr.response);
        };
        xhr.send();
    });
}

const responseData = (sendResponse, data) => { // 데이터 응답
    sendResponse(data);
}

const onListen = (request, sender, sendResponse) => {
    Promise.resolve()
        .then(getSavedToken)
        .then(token => getData(request, token))
        .then(data => responseData(sendResponse, data));
    return true;
}

chrome.runtime.onMessage.addListener(onListen);
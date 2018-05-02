console.log('Chrome extension langup!');

const getWord = () => {
    const word = window.getSelection().toString();
    console.info('text: ', word);

    // confirm text to word...
    // confirm text than bigger zero.
    // this program send this text to server.

    const data = { word };

    const response = (response) => {
        console.info('response: ', response);
    };

    chrome.runtime.sendMessage(data, response);
}

document.body.addEventListener('dblclick', getWord);

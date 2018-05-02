import axios from 'axios';

const onListen = (request, sender, sendResponse) => {
    const { word } = request;
    console.info('word in background:', word);

    // Send to Server...
    sendResponse(request.word);
}

chrome.runtime.onMessage.addListener(onListen);

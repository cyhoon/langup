console.log('Chrome extension langup!');

getSavedToken = () => {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['token'], (value) => {
            resolve(value.token);
        });
    });
}

// checkSavedToken = async () => {
//     let token;

//     await chrome.storage.sync.get(['token'], (value) => {
//         console.log(value);
//         token = value.token;
//     });

//     console.log('token: ', token);
//     return token;
// }

const createMeanComponent = (word, meanDictionary) => {
    const meanDivStyles = 'position: fixed; overflow-y: scroll; max-height: 400px; top: 5px; right: 5px; z-index: 32314142 !important; padding: 10px; background-color: white; width: 320px; border-radius: 2px;box-shadow: rgb(145, 145, 145) 0px 0px 5px !important;';
    const meanDiv = document.createElement('div');
    meanDiv.setAttribute('id', 'mean');
    meanDiv.style = meanDivStyles;

    const hStyles = 'font-size: 24px; font-weight: bold; display: "block"; margin-bottom: 10px;';
    const spanStyles = 'font-size: 14px; display: block; margin-top: 10px; margin-bottom: 10px;';

    let html = `<h style='${hStyles}'>${word}</h>`;
    meanDictionary.map(mean => { html += `<span style='${spanStyles}'>${mean.kor_word}</span>`; });

    meanDiv.innerHTML = html;
    const bodyElement = document.querySelector('body');
    bodyElement.addEventListener("click", () => { 
        const mean = document.getElementById("mean");
        if (!mean) return; // 존재하지 않는다면
        mean.remove();
    });
    bodyElement.parentNode.insertBefore(meanDiv, bodyElement.nextSibling);
}

const getWord = (token) => {
    if (!token) return;

    const word = window.getSelection().toString();
    console.info('text: ', word);

    // confirm text to word...
    // confirm text than bigger zero.
    // this program send this text to server.

    const data = { word };

    const response = (response) => {
        console.log(response);
        const payload = JSON.parse(response);

        console.info(`status: ${payload.status}, message: ${payload.message}`);
        const { status, data } = payload;

        if (status === 50) {
            createMeanComponent(word, [{ kor_word: '다시 로그인 해 주세요' }]);
            return;
        }

        if (!data) {
            console.info('데이터가 없습니다.');
            createMeanComponent(word, [{ kor_word: '데이터가 없습니다.' }]);
            return;
        }

        console.info('데이터가 있습니다.');
        console.info(`단어 데이터에 길이는: ${data.mean_dictionary.length}`);

        createMeanComponent(word, data.mean_dictionary);
    };

    chrome.runtime.sendMessage(data, response);
}

const dbClick = () => {
    Promise.resolve()
        .then(getSavedToken)
        .then(getWord);
}

document.body.addEventListener('dblclick', dbClick);

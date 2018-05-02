console.log('Chrome extension langup!');

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

const getWord = () => {
    const word = window.getSelection().toString();
    console.info('text: ', word);

    // confirm text to word...
    // confirm text than bigger zero.
    // this program send this text to server.

    const data = { word };

    const response = (response) => {
        const payload = JSON.parse(response);

        console.info(`status: ${payload.status}, message: ${payload.message}`);
        const { data } = payload;

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

document.body.addEventListener('dblclick', getWord);

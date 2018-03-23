// const models = require('./models');
const phantom = require('phantom');
const cheerio = require('cheerio');
const fs = require('fs');

const host = 'http://endic.naver.com/searchAssistDict.nhn?query=';

// global.instance = null;
// global.page = null;

const wordCraw = async (word) => {

    console.log('실행');

    const instance = await phantom.create();
    const page = await instance.createPage();
    page.on('onResourceRequested', function(requestData) {
        console.info('Requesting', requestData.url);
    });

    const status = await page.open(host+word);

    const dataParsing = async (data) => {
        const $ = cheerio.load(data, { decodeEntities: false });
        const eng_word = $("b").text();
        console.log('eng word ', eng_word);
        const mean_list = $('.fnt_k20').text().trim().split(',');

        await mean_list.forEach(async mean => { /* Add db rows */
            // await console.log(mean);
        });
    }

    if ( status !== 'success' ) {
        console.log(status);
        console.log('This request is an error.');
    } else {
        // html parsing
        const content = await page.property('content');

        page.evaluate(function() {
            return document.getElementsByTagName('pre')[0].textContent;
        }).then(dataParsing);
    }

    console.log('종료');
}

(async () => {

    console.log('Starting data crawling');

    // const english_dict = fs.readFileSync('./resource/english_words.txt', 'utf8').split('\n'); // english file

    // await english_dict.forEach(english_word => {
        wordCraw('hello');
    // });

})();
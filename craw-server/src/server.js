const models = require('./models');
const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');

const host = 'http://endic.naver.com/searchAssistDict.nhn?query=';

const wordCraw = async (word) => {

    await request(host + word, async (err, response, body) => {
        if (err) throw err;

        const $ = await cheerio.load(body);
        const eng_word = $("strong").first().text();
        const mean_list = await $(".fnt_k20").text().trim().split(',');

        // await mean_list.forEach(async mean => { /* Add db rows */

        //     korDictionary = { word: mean };
        //     await models.KorDictionary.create(korDictionary); // insert kor dictionary
        //     // console.log( '단어 뜻' + mean); // 700 개가 최대임
        // });

        await mean_list.forEach(async mean => {
            meanDictionary = { eng_word, kor_word: mean };
            await models.MeanDictionary.create(meanDictionary); // insert mean dictionary
        });
    });

}

(async () => {

    console.log('Start data crawling');

    const english_dict = fs.readFileSync('./resource/bad/words.txt', 'utf8').split('\n'); // english file

    await english_dict.forEach(async english_word => { // insert english
        /* 단어를 입력할 때 \r이 들어가는것을 방지해야함. */
        engDictionary = { word: english_word.replace(/\r?\n|\r/g, "") };
        await models.EngDictionary.create(engDictionary); // insert eng dictionary
    });

    await english_dict.forEach(async english_word => { // insert mean
        await wordCraw(english_word);
    });
})();
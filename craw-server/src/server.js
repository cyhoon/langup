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

    const bad_dict = fs.readFileSync('./resource/bad/words.txt', 'utf8').split('\n'); // english file
    const adjectives_dict = fs.readFileSync('./resource/adjectives/words.txt', 'utf8').split('\n'); // english file
    const adverbs_dict = fs.readFileSync('./resource/adverbs/words.txt', 'utf8').split('\n');
    const conjunctions_dict = fs.readFileSync('./resource/conjunctions/words.txt', 'utf8').split('\n');
    const nouns_dict = fs.readFileSync('./resource/nouns/words.txt', 'utf8').split('\n');
    const prepositions_dict = fs.readFileSync('./resource/prepositions/words.txt', 'utf8').split('\n');
    const pronouns_dict = fs.readFileSync('./resource/pronouns/words.txt', 'utf-8').split('\n');
    const verbs_dict = fs.readFileSync('./resource/verbs/words.txt', 'utf-8').split('\n');
    const english_basic_dict = fs.readFileSync('./resource/english_words2.txt', 'utf-8').split('\n');

    await english_basic_dict.forEach(async english_word => { // insert english
        /* 단어를 입력할 때 \r이 들어가는것을 방지해야함. */
        engDictionary = { word: english_word.replace(/\r?\n|\r/g, "") };
        await models.EngDictionary.create(engDictionary); // insert eng dictionary
    });

    await english_basic_dict.forEach(async english_word => { // insert mean
        await wordCraw(english_word);
    });
})();
var request = require("request");  
var cheerio = require("cheerio");

const word = 'hello';
const host = 'http://endic.naver.com/searchAssistDict.nhn?query=';

request(host+word, function(error, response, body) {
  if (error) throw error;

  var $ = cheerio.load(body);
  
  console.log('출력되라 ', $("strong").first().text());
  console.log($(".fnt_k20").text());

//   var postElements = $("section.posts article.post");
//   postElements.each(function() {
//     var postTitle = $(this).find("h1").text();
//     var postUrl = $(this).find("h1 a").attr("href");

//     console.log(postTitle);
//   });
});
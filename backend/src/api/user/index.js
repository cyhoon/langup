const koaRouter = require('koa-router');
const router = new koaRouter();

const vocabulary = require('./vocabulary');

router.use('/me/vocabulary', vocabulary.routes()); // 나의 단어장 들..

module.exports = router;

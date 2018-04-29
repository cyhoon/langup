/**
 * Module dependencies.
 */

const koaRouter = require('koa-router');
const router = new koaRouter();

/**
 * Router dependencies.
 */

const auth = require('./auth');
const search = require('./search');

/**
 * Middle ware dependencies.
 * 
 * 미들웨어 테스트 성공
 */
const authMiddleware = require('../middlewares/auth');


/**
 * 
 * REST API LIST
 * - 인증
 * - 단어 검색
 * 
 */

// account
router.use('/auth', auth.routes());
router.use('/search', authMiddleware, search.routes());

router.get('/', (ctx) => {
    ctx.body = 'hello world!';
});

module.exports = router;

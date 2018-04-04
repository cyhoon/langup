const koaRouter = require('koa-router');
const router = new koaRouter();

router.get('/signin', (ctx) => {
    ctx.status = 200;
    ctx.body = '로그인';
});

router.get('/signup', (ctx) => {
    ctx.status = 200;
    ctx.body = '회원가입';
});

module.exports = router;

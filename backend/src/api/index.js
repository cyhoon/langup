const koaRouter = require('koa-router');
const router = new koaRouter();

const auth = require('./auth');

router.use('/auth', auth.routes());

module.exports = router;

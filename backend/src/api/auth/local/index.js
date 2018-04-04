const koaRouter = require('koa-router');
const router = new koaRouter();

const localCtrl = require('./local.ctrl');

router.post('/signin', localCtrl.signIn);
router.post('/signup', localCtrl.signUp);

module.exports = router;

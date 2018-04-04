const koaRouter = require('koa-router');
const router = new koaRouter();

const signinCtrl = require('./signup.ctrl');

router.use('/local', signinCtrl.local);
router.use('/social', signinCtrl.social);

module.exports = router;

const koaRouter = require('koa-router');
const router = new koaRouter();

const searchCtrl = require('./search.ctrl');

router.get('/:word', searchCtrl.search);

module.exports = router;

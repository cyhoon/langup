/**
 * Module dependencies.
 */

const koaRouter = require('koa-router');
const router = new koaRouter();

/**
 * Router dependencies.
 */

const auth = require('./auth');

// account
router.use('/auth', auth.routes());

module.exports = router;

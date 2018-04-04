/**
 * Module dependencies.
 */

const koaRouter = require('koa-router');
const router = new koaRouter();

/**
 * Router Module dependencies.
 */
const signin = require('./signin');
const signup = require('./signup');

/**
 * 
 * URL router information
 * 
 * login
 * -
 * /auth/signin/local
 * /auth/singin/social
 * 
 * register
 * -
 * /auth/signup/local
 * /auth/signup/social
 */

router.use('/signin', signin.routes()); // login
router.use('/signup', signup.routes()); // register

module.exports = router;

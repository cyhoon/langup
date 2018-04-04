/**
 * Module dependencies.
 */

const koaRouter = require('koa-router');
const router = new koaRouter();

/**
 * Router Module dependencies.
 */
const local = require('./local'); // local 수정

/**
 * 
 * URL router information
 * 
 * local ( 로컬 )
 * -
 * /auth/local/signin = 로그인
 * /auth/local/signup = 회원가입
 * 
 * social ( 소셜 )
 * -
 * /auth/social/signin/:provider 
 * /auth/social/signup/:provider
 */

router.use('/local', local.routes()); // local
// router.use('/social', signup.routes()); // social

module.exports = router;

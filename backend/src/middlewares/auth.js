const tokenHelper = require('../helper/token');

const authMiddleware = async (ctx, next) => {
  const token = ctx.headers['x-access-token'];
  let decodeToken = null;

  try {
    decodeToken = await tokenHelper.verifyToken(token);
    if (decodeToken.sub !== 'token') throw "token error";
  } catch (error) { // token expired4
    ctx.status = 200;
    ctx.body = {
      status: 50,
      message: '토큰 인증 실패',
    }
    return;
  }

  ctx.token = decodeToken;
  await next();
};

module.exports = authMiddleware;

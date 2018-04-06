/**
 * Moudle dependencies.
 */
const changeCase = require('change-object-case');


/**
 * User module dependencies.
 */

const tokenHelper = require('../../../helper/token');
const validationHelper = require('../../../helper/validation');
const models = require('../../../models');

/**
 * 로그인 비즈니스 로직
 */

exports.signIn = async (ctx) => {
    const { body } = ctx.request;

    const validate = validationHelper.validateLocalSignIn(body);
    if (validate.error) {
        ctx.status = 200;
        ctx.body = {
            'status': 10,
            'message': '요청파라미터 에러',
        };
        return;
    }

    const { email, password } = body;

    // DB에 해당 이메일과 패스워드가 존재하는지 확인
    // 정보가 있으면 토큰을 발급 해줌
    // 정보가 없으면 계정을 찾을 수 없다고 알려줌
    const user = await models.User.selectByUser(email, password);

    if (!user) {
        ctx.status = 200;
        ctx.body = {
            'status': 20,
            'message': '계정을 찾을 수 없습니다'
        };
        return;
    }

    delete user.password;

    const token = await tokenHelper.createToken(user.email);
    const refreshToken = await tokenHelper.createRefreshToken(user.email);

    ctx.status = 200;
    ctx.body = {
        'status': 0,
        'message': '로그인',
        'data': {
            token,
            refresh_token: refreshToken,
            user,
        }
    };
};

/**
 * 회원가입 비즈니스 로직
 */

exports.signUp = async (ctx, err) => {
    const { body } = ctx.request;

    const validate = validationHelper.validateLocalSignUp(body);
    if (validate.error) {
        ctx.status = 200;
        ctx.body = {
            'status': 10,
            'message': '요청파라미터 에러',
        };
        return;
    }

    const user = await models.User.selectByUserEmail(body.email);
    if (user) {
        ctx.status = 200;
        ctx.body = {
            'status': 30,
            'message': '이미 가입되어 있습니다'
        }
        return;
    }

    const row = await models.User.create(changeCase.camelKeys(body));
    delete row.password;

    const token = await tokenHelper.createToken(row.email);
    const refreshToken = await tokenHelper.createRefreshToken(row.email);

    ctx.status = 200;
    ctx.body = {
        'status': 0,
        'message': '회원가입 성공',
        'data': {
            token,
            refresh_token: refreshToken,
            user: row
        }
    }
}

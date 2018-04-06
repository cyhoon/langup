const BaseJoi = require('joi');
const Joi = BaseJoi.extend(require('joi-date-extensions'));

/**
 * 로컬 로그인
 */

exports.validateLocalSignIn = (body) => {
    const schema = {
        email: Joi.string().email().required(), // 이메일
        password: Joi.string().required(), // 비밀번호
    };

    const validate = Joi.validate(body, schema);

    return validate;
}

/**
 * 로컬 회원가입
 */

exports.validateLocalSignUp = (body) => {
    const userSchema = {
        email: Joi.string().email().required(), // 이메일
        password: Joi.string().required(), // 비밀번호
        name: Joi.string().required(), // 이름
        profile_image: Joi.string(), // 프로필 이미지
    };

    const validate = Joi.validate(body, userSchema);
    return validate;
}

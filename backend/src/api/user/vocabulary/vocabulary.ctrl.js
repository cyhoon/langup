const models = require('../../../models');

exports.list = async (ctx, err) => { // 나의 단어장 들 보기
    const { userEmail } = ctx.token;

    const list = await models.UserBook.selectByAllVocabulary(userEmail);
    ctx.body = list;
};

exports.create = async (ctx, err) => { // 나의 단어장 생성

}

exports.modifyName = async (ctx, err) => { // 나의 단어장 이름 수정

}

exports.delete = async (ctx, err) => { // 나의 단어장 삭제

}
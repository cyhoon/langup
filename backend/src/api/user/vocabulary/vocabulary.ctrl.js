const models = require('../../../models');
const changeCase = require('change-object-case');

exports.list = async (ctx, err) => { // 나의 단어장 들 보기
    const { userEmail } = ctx.token;

    let response = {
      status: 0,
      message: '조회 성공',
    };

    try {
      const list = await models.UserBook.selectByAllVocabulary(userEmail);
      const data = changeCase.snakeArray(list);

      response.data = data;
      ctx.status = 200;
      ctx.body = response;
    } catch (error) {
      response.status = 500;
      response.message = '서버 에러';
      ctx.status = 500;
      ctx.body = response;
    }
};

exports.create = async (ctx, err) => { // 나의 단어장 생성
  ctx.body = '사용자 가 단어를 생성 안할 것 같아서 보류';
}

exports.modifyName = async (ctx, err) => { // 나의 단어장 이름 수정

}

exports.delete = async (ctx, err) => { // 나의 단어장 삭제

}
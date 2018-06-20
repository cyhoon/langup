const models = require('../../../models');
const changeCase = require('change-object-case');

exports.list = async (ctx, err) => { // 나의 단어장 들 보기
    let response = {
      status: 0,
      message: '조회 성공',
    };

    const { userEmail } = ctx.token;

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

exports.show = async (ctx, err) => {
  let response = {
    status: 0,
    message: '조회 성공',
  };

  const { userEmail } = ctx.token;
  const { book_idx: bookIdx } = ctx.params;

  try {
    const isPermission = await models.UserBook.getUserBook( bookIdx, userEmail );
    if (!isPermission) { // 다른 사람 이라면
      response.status = 20;
      response.message = '단어장을 볼 수 없습니다';
    } else {
      let vocabulary = await models.UserBook.selectByVocabulary(models, bookIdx, userEmail);

      /**
       * *** 나중에 다시 수정해 보자. ***
       * 
       * 배열에서의 비동기 문제
       * 해결 URL: https://stackoverflow.com/questions/40140149/use-async-await-with-array-map
       */
      await Promise.all(vocabulary.UserWords.map(async (userWord) => {
        const means = await models.MeanDictionary.selectByMean(userWord.word);
        userWord.dataValues.means = means;
      }));

      response.data = changeCase.snakeKeys(vocabulary.toJSON(), { arrayRecursive: true });

      ctx.status = 200;
      ctx.body = response;
    }
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
  let response = {
    status: 0,
    message: '단어장 이름 수정 성공',
  };

  const { userEmail } = ctx.token;

  const { idx } = ctx.params;
  const { title } = ctx.request.body;

  try {
    const vocabulary = await models.UserBook.getUserBook( idx, userEmail );

    if (!vocabulary) { // 존재하지 않는다면..
      response.status = 20;
      response.message = '단어장 이름을 수정 할 수 없습니다';
    } else {
      await models.UserBook.update({ title }, { where: { idx, userEmail }, returning: true });
    }

    ctx.status = 200;
  } catch (error) {
    response.status = 500;
    response.message = '서버 에러';
    ctx.status = 500;
  }

  ctx.body = response;
}

exports.delete = async (ctx, err) => { // 나의 단어장 삭제
  let response = {
    status: 0,
    message: '단어장 삭제 성공'
  };

  const { userEmail } = ctx.token;
  const { idx } = ctx.params;

  try {
    const vocabulary = await models.UserBook.getUserBook( idx, userEmail );

    if (!vocabulary) { // 존재하지 않는다면..
      response.status = 20;
      response.message = '단어장을 삭제 할 수 없습니다';
    } else {
      await models.UserBook.destroy({ where: { idx }});
    }

    ctx.status = 200;
  } catch (error) {
    console.error('error: ', error.message);
    response.status = 500;
    response.message = '서버 에러';
    ctx.status = 500;
  }

  ctx.body = response;
}

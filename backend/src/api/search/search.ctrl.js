/**
 * User module dependencies.
 */

const models = require('../../models');

exports.search = async (ctx, err) => {
    const word = ctx.params.word;

    try {
      const rows = await models.EngDictionary.searchByWord(models, word);
      ctx.status = 200;
      ctx.body = {
        status: 0,
        message: '단어 검색 성공',
        data: rows,
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        status: 500,
        message: '서버 에러'
      };
    }
}

const dateHelper = require('../../helper/dateFormat');

/**
 * User module dependencies.
 */

const models = require('../../models');

exports.search = async (ctx, err) => {
    // 토큰에서 사용자 아이디를 가지고 온다.
    // 사용자가 오늘 처음 검색을 한다면 단어장을 생성하고 아니면 idx를 가지고 온다.
    // 사용자가 검색한 단어를 DB에 입력한다.

    const userEmail = ctx.token.userEmail;
    const word = ctx.params.word;

    let response = {
      status: 0,
      message: '단어 검색 성공',
    };

    try {
      /**
       * @description
       * 
       * 사용자가 검색한 단어 정보를 조회한 후 응답한다.
       */
      const rows = await models.EngDictionary.searchByWord(models, word);
      response.data = rows;
      ctx.status = 200;
      ctx.body = response;

      /**
       * @description
       * 
       * 사용자가 오늘 최초로 검색했는지에 따라 단어장을 생성해준다.
       * 먼저, 조회를 한다.
       * 없다면 단어장을 새로 생성해준다.
       * 그 후 사용자 단어에 값을 넣어준다.
       */

      nowDate = dateHelper.yymmdd(); // 현재 날짜를 가지고옴
      let userBook = await models.UserBook.selectByUserBookToday(models, userEmail, nowDate);

      if (userBook === null) {
        const userBookInsertData = {
          title: `단어장 (${nowDate})`,
          userEmail,
          // profileImage,
          createDate: nowDate
        }
        userBook = await models.UserBook.create(userBookInsertData);
      }

      /**
       * @description
       * 
       * 사용자가 검색한 단어를 DB에 저장.
       */

      const userWordInsertData = {
        userBookIdx: userBook.idx,
        word
      };

      models.UserWord.create(userWordInsertData);
    } catch (error) {
      response.status = 500;
      response.message = '서버 에러';
      ctx.status = 500;
      ctx.body = response;
    }
}

const koaRouter = require('koa-router');
const router = new koaRouter();

const vocabularyCtrl = require('./vocabulary.ctrl');

router.get('/', vocabularyCtrl.list); // 나의 단어장 들 보기
router.post('/', vocabularyCtrl.create); // 나의 단어장 생성
router.put('/', vocabularyCtrl.modifyName); // 나의 단어장 이름 수정
router.delete('/:idx', vocabularyCtrl.delete); // 나의 단어장 삭제

module.exports = router;

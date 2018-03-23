import Router from 'koa-router';
import memberCtrl from './member.ctrl';

const router = new Router();

router.get('/', memberCtrl.getTest);

module.exports = router;
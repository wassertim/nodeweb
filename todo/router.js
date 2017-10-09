const Router = require('express').Router;
const controller = require('./controller');
const router = new Router()

router.get('/', controller.index);

router.get('/list', controller.list);

router.get('/details/:id', controller.details);

module.exports = router;
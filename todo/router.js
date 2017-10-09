
const Router = require('express').Router;
const TodoController = require('./controller');
const router = new Router();

const controller = new TodoController();

router.get('/', controller.index);

router.get('/list', controller.list);

router.get('/details/:id', controller.details);

module.exports = router;
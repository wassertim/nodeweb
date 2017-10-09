const model = require('./model');

class TodoController {

    index(req, res) {
        res.send('index');
    }

    list(req, res) {
        res.render('list', {
            tasks: model.list
        });
    }

    details(req, res) {
        const id = parseInt(req.params.id, 10);
        res.render('details', {
            task: model.list[id]
        });
    }
}

module.exports = TodoController;
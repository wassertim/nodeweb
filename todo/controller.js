const model = require('./model');

const controller = {
    index(req, res) {
        res.send('index');
    },
    list(req, res) {             
        res.send(model.list);        
    },
    details(req, res) {
        const id = +req.params.id;
        res.send(model.list[id]);
    }
}

module.exports = controller;
const express = require('express');
const router = require('./todo/router');

const app = express();

app.use('/todo', router);

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(8080, () => {
    console.log('listening');
});
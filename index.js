const express = require('express');
const router = require('./todo/router');

const app = express();

app.use('/todo', router);

app.listen(8080, () => {
    console.log('listening');
});
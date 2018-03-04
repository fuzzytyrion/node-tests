const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([{
                name: 'dave',
                age: '56'
            }, {
                name: 'billy',
                age: 34
            }]);
});

app.listen(3000);

module.exports.app = app;
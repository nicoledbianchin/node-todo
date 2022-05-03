var Todos = require('../models/todoModel');

module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        // seed database
        var starterTodos = [
            {
                username: 'trixie',
                todo: 'record album',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'gottmik',
                todo: 'wal the runway',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'jinkx',
                todo: 'do standup',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function (err, result) {
            res.send(result);
        });
    });
}
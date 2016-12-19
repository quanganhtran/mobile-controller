var express = require('express');
var path = require('path');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function (socket) {
    socket.on('device', function (data) {
        console.log('connected from:', data);
    });
    socket.on('tap', function (data) {
        socket.broadcast.emit('tap', data);
    });
    socket.on('motion', function (data) {
        socket.broadcast.emit('motion', data);
    });
    socket.on('disconnect', function () {
        console.log('a device disconnected');
    })
});

module.exports = app;

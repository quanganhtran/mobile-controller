const io = require('socket.io-client');

const socket = io.connect('http://10.170.82.45:3000');

window.onload = function () {
    if (window.DeviceOrientationEvent) {
        log('DeviceOrientation is supported');
    } else {
        log('ERROR');
    }
};

socket.on('connect', function (data) {
    socket.emit('device', 'mobile');
    document.addEventListener('touchstart', function (event) {
        socket.emit('tap', event);
    });
    // window.addEventListener('devicemotion', function (event) {
    //     socket.emit('motion', event);
    // }, true);
    window.addEventListener('deviceorientation', function (event) {
        socket.emit('orientation', event);
    }, true);
});

function log(data) {
    const logOutput = document.getElementById('log');
    logOutput.textContent += '> ' + JSON.stringify(data) + '\n';
}
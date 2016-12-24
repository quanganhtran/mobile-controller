const io = require('socket.io-client');
const THREE = require('three');
//const FULLTILT = require('@hughsk/fulltilt');

const { start, animate, mesh } = require('desktop/scene');

// const socket = io.connect('http://10.170.82.45:3000');
// socket.on('connect', function () {
//     console.log('Connected');
//     socket.emit('device', 'desktop');
// });
// socket.on('tap', function (data) {
//     console.log(data);
// });

window.onload = function () {
    // const canvas = document.getElementById('canvas');
    // const context = canvas.getContext('2d');
    // const centerX = canvas.width / 2;
    // const centerY = canvas.height / 2;

    const debug = document.getElementById('debug');
    start();

    // let [a, b, g, ch] = [0, 0, 0, 0];
    // mesh.rotation.set(-Math.PI/2, 0, 0);
//     socket.on('orientation', function ({alpha, beta, gamma, webkitCompassHeading}) {
//         const [a2, b2, g2, ch2] = [alpha, beta, gamma, webkitCompassHeading].map(x => x * Math.PI / 180);
//         // console.log(event);
//         mesh.rotation.z = a2;
//         mesh.rotateX(b2 - b);
//         mesh.rotateY(g2 - g);
//
//         debug.textContent =
// `alpha: ${alpha}
// beta: ${beta}
// gamma: ${gamma}
// webkitCompassHeading: ${webkitCompassHeading}
// `;
//         [a, b, g, ch] = [a2, b2, g2, ch2];
//     });

    // socket.on('motion', function ({acceleration: {x, y, z}, rotationRate}) {
    //     const [ax, ay, az] = [x, y, z].map(convertAcc);
    //     mesh.position.x = ax;
    //     mesh.position.y = ay;
    //     mesh.position.z = az;
    // });

    animate();
};

// require('tracking');
// const initGUIControllers = require('desktop/gui');

// const tracking = window.tracking;

// window.onload = function() {
//     var video = document.getElementById('video');
//     var canvas = document.getElementById('canvas');
//     var context = canvas.getContext('2d');
//     var tracker = new tracking.ColorTracker();
//     tracking.track('#video', tracker, { camera: true });
//     tracker.on('track', function(event) {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         event.data.forEach(function(rect) {
//             if (rect.color === 'custom') {
//                 rect.color = tracker.customColor;
//             }
//             context.strokeStyle = rect.color;
//             context.strokeRect(rect.x, rect.y, rect.width, rect.height);
//             context.font = '11px Helvetica';
//             context.fillStyle = "#fff";
//             context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
//             context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
//         });
//     });
//     initGUIControllers(tracker);
// };
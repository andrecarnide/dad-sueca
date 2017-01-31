var socket = require('socket.io-client')('http://localhost:8080');
socket.on('connect', () => console.log('connected'));
socket.on('players', (m) => console.log('>> %s', m));
socket.on('disconnect', () => console.log('connected'));

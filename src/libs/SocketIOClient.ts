const io = require('socket.io-client');
const { URL_SOCKETIO } = require('../config/config');

const socket = io(`${URL_SOCKETIO}`, {
  query: {
    'my-ket': 'Api'
  }
});

module.exports = socket;

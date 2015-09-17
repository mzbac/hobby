var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');
var io = require('socket.io-client');

var ActionTypes = Constants.ActionTypes;

var socket = init()

var socketAction = {

    SendMessage: function(data) {
        socket.emit('message', data);
        Dispatcher.dispatch({
            type: ActionTypes.SOCKET_EMITMESSAGE,
            message: data
        });
    }


};

module.exports = socketAction


function init() {
    try {
        var socket = io();

        socket.on('connect', onConnect);
        socket.on('message', onMessage);
        socket.on('disconnect', onDisconnect);

        function onConnect() {
            Dispatcher.dispatch({
                type: ActionTypes.SOCKET_ONREADY,
                socket: socket
            });
        };

        function onMessage(data) {
            Dispatcher.dispatch({
                type: ActionTypes.SOCKET_ONMESSAGE,
                message: data
            });
        };

        function onDisconnect() {
            Dispatcher.dispatch({
                type: ActionTypes.SOCKET_ONDISCONNECT,

            });
        };

        return socket;
    }
    catch (ex) {
        console.log(ex);
        Dispatcher.dispatch({
            type: ActionTypes.SOCKET_INIT_FAIL,
            socket: undefined
        });
        return undefined;
    }
}

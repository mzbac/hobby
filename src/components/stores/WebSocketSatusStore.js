var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';


var _socketStatus = undefined;

var WebSocketStatusStore = assign({}, EventEmitter.prototype, {
    //standard change event handler
    emitChange: function() {
        this.emit(CHANGE_EVENT);
        console.log('Sokect stauts : '+_socketStatus);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getStatus: function() {
        return _socketStatus;
    }

});

WebSocketStatusStore.dispatchToken = Dispatcher.register(function(action) {

    switch (action.type) {

        case ActionTypes.SOCKET_ONREADY:
            _socketStatus = ActionTypes.SOCKET_ONREADY;
            WebSocketStatusStore.emitChange();
            break;

        case ActionTypes.SOCKET_INIT_FAIL:
            _socketStatus = ActionTypes.SOCKET_INIT_FAIL;
            WebSocketStatusStore.emitChange();
            break;

        case ActionTypes.SOCKET_ONDISCONNECT:
            _socketStatus = ActionTypes.SOCKET_ONDISCONNECT;
            WebSocketStatusStore.emitChange();
            break;

        default:

    }

});





module.exports = WebSocketStatusStore;
var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    SOCKET_ONREADY: null,
    SOCKET_ONERRPR: null,
    SOCKET_ONMESSAGE: null,
    SOCKET_ONDISCONNECT:null,
    SOCKET_INIT_FAIL:null,
    SOCKET_EMITMESSAGE:null
  })

};
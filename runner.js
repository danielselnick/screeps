var creeps = require('c_main');
var structures = require('s_main');
var rooms = require('r_main');

module.exports = {
    run : function(game) {
        rooms.run(game.rooms);
        creeps.run(game.creeps);
    }
};
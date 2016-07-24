var creeps = require('c_main');
var structures = require('s_main');
var rooms = require('r_main');

module.exports = {
    run : function(game) {
        creeps.run(game.creeps);
        structures.run(game.structures);
        rooms.run(game.rooms);
    }
};
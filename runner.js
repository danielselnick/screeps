var creeps = require('creeps');
var structures = require('structures');
var rooms = require('rooms');

module.exports = {
    run : function(game) {
        creeps.run(game.creeps);
        structures.run(game.structures);
        rooms.run(game.rooms);
    }
};
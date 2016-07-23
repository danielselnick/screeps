var creeps = require('creeps');
var structures = require('structures');
var rooms = require('rooms');

var runner = {
    run : function(game) {
        creeps.run(game.creeps);
        structures.run(game.structures);
        rooms.run(game.rooms);
    }
};
module.exports = runner;
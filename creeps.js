var harvester = require('harvester');
var upgrader = require('upgrader');
var builder = require('builder');

module.exports = {
    run: function(gameCreeps) {
        for(var name in gameCreeps) {
            var creep = gameCreeps[name];
            if(creep.memory.roleId == harvester.roleId) {
                harvester.run(creep);
            }
            else if(creep.memory.roleId == upgrader.roleId) {
                upgrader.run(creep);
            }
            else if(creep.memory.roleId == builder.roleId) {
                builder.run(creep);
            }
        }
    }
};
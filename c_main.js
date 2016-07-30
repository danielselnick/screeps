var harvester = require('c_harvester');
var upgrader = require('c_upgrader');
var builder = require('c_builder');

module.exports = {
    creeps: {
        2: require('c_builder'),
        0: require('c_harvester'),
        1: require('c_upgrader')
    },
    run: function(gameCreeps) {
        for(var name in gameCreeps) {
            var creep = gameCreeps[name];
            var roleId = creep.memory.roleId;
            this.creeps[roleId].run(creep);
        }
    }
};
var harvester = require('c_harvester');
var upgrader = require('c_upgrader');
var builder = require('c_builder');

module.exports = {
    creeps: {
        builder: require('c_builder'),
        harvester: require('c_harvester'),
        upgrader: require('c_upgrader')
    },
    run: function(gameCreeps) {
        for(var name in gameCreeps) {
            var creep = gameCreeps[name];
            var roleId = creep.memory.roleId;
            this.creeps[roleId].run(creep);
        }
    }
};
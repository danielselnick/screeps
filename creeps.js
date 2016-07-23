var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports = {
    run: function(gameCreeps) {
        for(var name in gameCreeps) {
            var creep = gameCreeps[name];
            if(creep.memory.role == roleHarvester.roleId) {
                roleHarvester.run(creep);
            }
            else if(creep.memory.role == roleHarvester.roleId) {
                roleUpgrader.run(creep);
            }
            else if(creep.memory.role == roleHarvester.roleId) {
                roleBuilder.run(creep);
            }
        }
    }
};
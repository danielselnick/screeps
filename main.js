var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var memory = require('memory');
var room = require('room');

module.exports.loop = function () {

    Creep.prototype.hello = function() {
        console.log('hello');
    };
    var tower = Game.getObjectById('TOWER_ID');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == memory.roles.harvester) {
            roleHarvester.run(creep);
            creep.hello();
        }
        if(creep.memory.role == memory.roles.upgrader) {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == memory.roles.builder) {
            roleBuilder.run(creep);
        }
    }
}
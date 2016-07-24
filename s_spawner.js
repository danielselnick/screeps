var harvester = require('harvester');

module.exports = {
    run : function(spawner) {
        spawner.createCreep([MOVE,CARRY,WORK], 'h1', { roleId : 0});
    }
};
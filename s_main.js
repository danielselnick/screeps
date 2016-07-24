var spawner = require('s_spawner');
var tower = require('s_tower');
module.exports = {
    roles: {},
    initialize: function() {
        this.roles[spawner.structureType] = spawner.run;
        this.roles[tower.structureType] = tower.run;
    },
    run : function run(structures) {
        this.initialize();
        for(var name in structures) {
            console.log(name);
            var structure = structures[name];
            var structureType = structure.structureType;
            this.roles[structureType]();
        }
    }
};
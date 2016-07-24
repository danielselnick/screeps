var spawner = require('s_spawner');
var tower = require('s_tower');
var controller = require('s_controller')

module.exports = {
    roles: {},
    initialize: function() {
        this.roles[spawner.structureType] = spawner.run;
        this.roles[tower.structureType] = tower.run;
        this.roles[controller.structureType] = controller.run;
    },
    run : function run(structures) {
        this.initialize();
        for(var name in structures) {
            console.log(name);
            var structure = structures[name];
            var structureType = structure.structureType;
            this.roles[structureType](structure);
        }
    }
};
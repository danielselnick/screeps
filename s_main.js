var spawner = require('s_spawner');
var tower = require('s_tower');
var controller = require('s_controller');
var extension = require('s_extension');

module.exports = {
    roles: {},
    initialize: function() {
        this.roles[spawner.structureType] = spawner.run;
        this.roles[tower.structureType] = tower.run;
        this.roles[controller.structureType] = controller.run;
        this.roles[extension.structureType] = extension.run;
    },
    run : function run(structures) {
        this.initialize();
        for(var name in structures) {
            var structure = structures[name];
            var structureType = structure.structureType;
            this.roles[structureType](structure);
        }
    }
};
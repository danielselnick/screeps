var container = require('s_container');
var controller = require('s_controller');
var extension = require('s_extension');
var extractor = require('s_extractor');
var lab = require('s_lab');
var link = require('s_link');
var nuker = require('s_nuker');
var observer = require('s_observer');
var rampart = require('s_rampart');
var road = require('s_road');
var spawn = require('s_spawn');
var storage = require('s_storage');
var terminal = require('s_terminal');
var tower = require('s_tower');
var wall = require('s_wall');

module.exports = {
    roles: {},
    initialize: function() {
        this.roles[spawn.structureType] = spawn.run;
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
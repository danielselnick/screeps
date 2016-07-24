var harvester = require('c_harvester');
var upgrader = require('c_upgrader');
var builder = require('c_builder');
var controller = require('c_controller');

module.exports = {
    roles: {},
    initialize: function() {
        this.roles[harvester.roleId] = harvester.run;
        this.roles[upgrader.roleId] = upgrader.run;
        this.roles[builder.roleId] = builder.run;
        this.roles[controller.roleId] = controller.run;
    },
    run: function(gameCreeps) {
        this.initialize();
        for(var name in gameCreeps) {
            var creep = gameCreeps[name];
            var roleId = creep.memory.roleId;
            this.roles[roleId](creep);
        }
    }
};
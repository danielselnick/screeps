var gs = require('global_constants');

module.exports = {
    structureType: STRUCTURE_SPAWN,
    spawn: function (spawner, definition) {
        "use strict";
        spawner.createCreep(definition.parts, definition.prefix + '1', {roleId: definition.roleId});
    },
    run : function(spawner) {
        "use strict";
        for (var role in gs.creepRoles) {
            this.spawn(spawner, gs[role]);
        }
    }
};
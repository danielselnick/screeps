var gs = require('global_constants');

module.exports = {
    structureType: STRUCTURE_SPAWN,
    spawn: function (spawner, definition) {
        "use strict";
        spawner.createCreep(definition.parts, definition.prefix + '1', {roleId: definition.roleId});
    },
    run : function(spawner) {
        "use strict";
        for (var i = 0, l = gs.creepRoles.length; i < l; i++) {
            var definition = gs[gs.creepRoles[i]];
            spawner.createCreep(definition.parts, definition.prefix + '1', {roleId: definition.roleId});
        }
    }
};
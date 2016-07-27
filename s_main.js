module.exports = {
    roles: {
        container: require('s_container'),
        controller: require('s_controller'),
        extension: require('s_extension'),
        extractor: require('s_extractor'),
        lab: require('s_lab'),
        link: require('s_link'),
        nuker: require('s_nuker'),
        observer: require('s_observer'),
        rampart: require('s_rampart'),
        road: require('s_road'),
        spawn: require('s_spawn'),
        storage: require('s_storage'),
        terminal: require('s_terminal'),
        tower: require('s_tower'),
        wall: require('s_wall')
    },
    run : function run(structures) {
        for(var name in structures) {
            var structure = structures[name];
            var structureType = structure.structureType;
            this.roles[structureType].run(structure);
        }
    }
};
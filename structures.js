var spawner = require('spawner');
module.exports = {
    run : function run(structures) {
        for(var name in structures) {
            console.log(name);
            var structure = structures[name];
            var structureType = structure.structureType;
            console.log(structure.structureType);
            if(structureType === STRUCTURE_SPAWN) {
                spawner.run(structure);
            }
        }
    }
};
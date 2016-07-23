module.exports = {
    run : function run(structures) {
        for(var name in structures) {
            console.log(name);
            var structure = structures[name];
            console.log(structure.structureType);
        }
    }
};
module.exports = {
    harvester: {
        roleId: 0,
        prefix: 'h',
        parts: [MOVE, WORK, CARRY]
    },
    upgrader: {
        roleId: 1,
        prefix: 'u',
        parts: [MOVE, WORK, CARRY]
    },
    builder: {
        roleId: 2,
        prefix: 'b',
        parts: [MOVE, WORK, CARRY]
    },
    creepRoles: ['harvester', 'upgrader', 'builder']
};
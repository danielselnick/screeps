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
    creepRoles: ['harvester', 'upgrader', 'builder'],
    tasks: ['harvest', 'upgrade', 'build', 'repair',]
};
/*
 Every game tick, a task may be requested, completed, or no longer valid
 Enter a task queue
 Service Bus event queue (good for builders problem)
 Utility AI (good for warriors problem)
 bus will store messages in Memory
 worker will pull messages

 carrier
 - If I can transfer to another

 action
 behavior is a set of actions in a specific order
 habit is repeating a set of behaviors



 */
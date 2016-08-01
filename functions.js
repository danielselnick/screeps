"use strict";
var _ = require('lodash');
module.exports = {
    c: {
        harvestersPerSource: 4
    },
    requests: {
        spawnCreep: [],
        harvest: [],
        requestors: []
    },
    myCreeps: [],
    hostileCreeps: [],
    log: function (x) {
        console.log(JSON.stringify(x));
    },
    initializeData: function () {
        if (_.isUndefined(Memory.requests)) {
            Memory.requests = this.requests;
        } else {
            this.requests = Memory.requests;
        }
    },
    getAllObjectsInRoom: function (room) {
        var areaObjects = room.lookAtArea(0, 0, 49, 49, true);
        var objects = [];
        for (var i = 0, len = areaObjects.length; i < len; i++) {
            var obj = areaObjects[i];
            if (obj.type === "terrain") {
                break;
            } else {
                objects.push(obj);
            }
        }
        return objects;
    },
    // The different types of objects that are in the room
    creep: function (creep) {
        if (creep.my) {
            this.myCreeps.push(creep);
        } else {
            this.hostileCreeps.push(creep);
            // Handle hostile later
            return;
        }

    },
    structure: function (structure) {
        var structureType = structure.structureType;
        if (structureType) {
            this[structure.structureType](structure);
        } else {
            //console.log("missing structure type from object.");
        }
    },
    source: function (source) {
        //this.log(source);
        if (_.isUndefined(source.memory.harvesters)) {
            source.memory.harvesters = [];
        }
        if (_.isUndefined(source.memory.totalHarvesterSlots)) {
            var terrain = source.room.lookAtArea(source.pos.y - 1, source.pos.x - 1, source.pos.y + 1, source.pos.x + 1, true);
            this.log(terrain);
        }
        if (source.memory.harvesters.length < source.memory.totalHarvesterSlots
            && !source.memory.hasSpawnRequest) {
            this.requests.spawnCreep.push({
                creepType: "harvester",
                senderId: source.id
            });
        }
    },
    spawn: function (spawn) {
        var length = this.requests.spawnCreep.length;
        if (length < 1) {
            return;
        }
        var request = this.requests.spawnCreep[0];
        var result = this[request.creepType](spawn, request);
        if (result > 0) {
            this.requests.spawnCreep.shift();
        }
    },
    harvester: function (spawn, request) {
        var result = spawn.createCreep([WORK, CARRY, MOVE]);
        if (_.isString(result)) {
            var source = Game.getObjectById([request.senderId]);
            source.memory.hasSpawnRequest = false;
            return 1;
        } else {
            return result;
        }
    },
    extension: function (ext) {

    },
    road: function (road) {

    },
    constructedWall: function (wall) {

    },
    rampart: function (rampart) {

    },
    keeperLair: function (kl) {

    },
    portal: function (portal) {

    },
    controller: function (controller) {

    },
    link: function (link) {

    },
    storage: function (storage) {

    },
    tower: function (tower) {

    },
    observer: function (observer) {

    },
    powerBank: function (pb) {

    },
    powerSpawn: function (ps) {

    },
    extractor: function (extractor) {

    },
    lab: function (lab) {

    },
    terminal: function (terminal) {

    },
    container: function (container) {

    },
    nuker: function (nuker) {

    },
    extendGame: function () {
        if (_.isUndefined(Source.prototype.memory)) {
            Object.defineProperty(Source.prototype, 'memory', {
                get: function () {
                    if (_.isUndefined(Memory.sources)) {
                        Memory.sources = {};
                    }
                    if (!_.isObject(Memory.sources)) {
                        return undefined;
                    }
                    return Memory.sources[this.id] = Memory.sources[this.id] || {};
                },
                set: function (value) {
                    if (_.isUndefined(Memory.sources)) {
                        Memory.sources = {};
                    }
                    if (!_.isObject(Memory.sources)) {
                        throw new Error('Could not set source memory');
                    }
                    Memory.sources[this.id] = value;
                }
            });
        }
    }
};
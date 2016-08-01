"use strict";
var _ = require('lodash');
module.exports = {
    c: {
        harvestersPerSource: 4
    },
    requests: {
        spawnCreep: [],
        harvest: [],
    },
    myCreeps: [],
    hostileCreeps: [],
    log: function (x) {
        console.log(JSON.stringify(x));
    },
    initializeData: function () {
        if (!Memory.requests) {
            Memory.requests = [];
        } else {
            this.requests = Memory.requests.slice(0);
        }
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
        if (!source.memory.harvesters) {
            source.memory.harvesters = [];
        }
        if (source.memory.harvesters.length < this.c.harvestersPerSource
            && !source.memory.hasSpawnRequest) {
            this.requests.spawnCreep.push({
                creepType: "harvester",
                source: source
            });
            source.memory.hasSpawnRequest = true;
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
            request.source.harvesters.push(result);
            request.source.hasSpawnRequest = false;
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

    }
};
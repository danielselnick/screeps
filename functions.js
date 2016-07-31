"use strict";
module.exports = {
    log: function (x) {
        console.log(JSON.stringify(x));
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
    }, source: function (source) {
        this.log(source);
    }, structure: function (structure) {
        this.log(structure);
        this[structure.structureType](structure);
    }, creep: function (creep) {
        this.log(creep);
    }, spawn: function (spawn) {
        this.log(spawn);
    }, extension: function (ext) {
        this.log(ext);
    }, road: function (road) {
        this.log(road);
    }, constructedWall: function (wall) {
        this.log(wall);
    }, rampart: function (rampart) {
        this.log(rampart);
    }, keeperLair: function (kl) {
        this.log(kl);
    }, portal: function (portal) {
        this.log(portal);
    }, controller: function (controller) {
        this.log(controller);
    }, link: function (link) {
        this.log(link);
    }, storage: function (storage) {
        this.log(storage);
    }, tower: function (tower) {
        this.log(tower);
    }, observer: function (observer) {
        this.log(observer);
    }, powerBank: function (pb) {
        this.log(powerBank);
    }, powerSpawn: function (ps) {
        this.log(powerSpawn);
    }, extractor: function (extractor) {
        this.log(extractor);
    }, lab: function (lab) {
        this.log(lab);
    }, terminal: function (terminal) {
        this.log(terminal);
    }, container: function (container) {
        this.log(container);
    }, nuker: function (nuker) {
        this.log(nuker);
    }
};
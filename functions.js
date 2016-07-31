"use strict";
module.exports = {
    requests: [],
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
    },
    goThroughAllRequests: function () {
        for (var i = 0, len = this.requests.length; i < len; i++) {
            var request = this.requests[i];
            this[request.type](request);
        }
    },
    harvest: function (request) {
        console.log('harvest func');
    },
    source: function (source) {
        var request = {
            sender: source,
            senderType: source,
            type: "harvest",
        };
        this.requests.push(request);
    }, structure: function (structure) {
        var structureType = structure.structureType;
        if (structureType) {
            this[structure.structureType](structure);
        } else {
            //console.log("missing structure type from object.");
        }
    }, creep: function (creep) {

    }, spawn: function (spawn) {

    }, extension: function (ext) {

    }, road: function (road) {

    }, constructedWall: function (wall) {

    }, rampart: function (rampart) {

    }, keeperLair: function (kl) {

    }, portal: function (portal) {

    }, controller: function (controller) {

    }, link: function (link) {

    }, storage: function (storage) {

    }, tower: function (tower) {

    }, observer: function (observer) {

    }, powerBank: function (pb) {

    }, powerSpawn: function (ps) {

    }, extractor: function (extractor) {

    }, lab: function (lab) {

    }, terminal: function (terminal) {

    }, container: function (container) {

    }, nuker: function (nuker) {

    }
};
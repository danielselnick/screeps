"use strict";
module.exports = {
    log: function (x) {
        var props = Object.getOwnPropertyNames(x);
        for (var prop in props) {
            console.log(prop);
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
    }, source: function (source) {
        this.log(source);
    }, structure: function (structure) {
        this.log(structure);
    }, creep: function (creep) {
        this.log(creep);
    }
};
module.exports = {
    getAllObjectsInRoom: function (room) {
        "use strict";
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
        "use strict";
        console.log(Object.getOwnPropertyNames(source));
    }, structure: function (structure) {
        "use strict";
        console.log(Object.getOwnPropertyNames(structure));
    }
};
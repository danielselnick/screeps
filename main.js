

module.exports.loop = function () {
    var f = require('functions');
    console.log('start');
    f.extendGame();
    f.initializeData();

    for (var name in Game.rooms) {
        var room = Game.rooms[name];
        var objects = f.getAllObjectsInRoom(room);
        for (var i = 0, len = objects.length; i < len; i++) {
            var obj = objects[i];
            // Invoke a function by the same name, and dereference the object
            f[obj.type](obj[obj.type]);
        }
    }
}
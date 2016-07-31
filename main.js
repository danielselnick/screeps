

module.exports.loop = function () {
    var f = require('functions');
    for (var name in Game.rooms) {
        var room = Game.rooms[name];
        var objects = f.getAllObjectsInRoom(room);
        console.log(objects);
    }
}
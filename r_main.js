module.exports = {
    run: function(rooms) {
        for (var name in rooms) {
            var room = rooms[name];
            for (var i = 101; i < 118; i++) {
                var objects = room.find(i);
                for (var obj in objects) {
                    console.log(obj);
                }
            }
        }
    }
};
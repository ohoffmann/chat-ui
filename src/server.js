const io = require('socket.io')();

io.on('connection', (socket) => {
    socket.on('new message', function(msg) {
      console.log('message: ' + msg.text);
      socket.broadcast.emit('new message', msg);
    });
    socket.on('disconnect', function() {
      console.log('user disconnected');
    });
    socket.on('add user', function() {
        console.log('add user');
    })
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
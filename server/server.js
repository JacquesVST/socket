const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000',
        transports: ['websocket', 'polling'],
        methods: ["GET", "POST"],
        credentials: true
      },
      allowEIO3: true
});
const port = 3030;


app.use(express.static(__dirname + '/public'));

function onConnection(socket){
  socket.on('drawing', (data) => {
      socket.broadcast.emit('drawing', data);
    });
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));
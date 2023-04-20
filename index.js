const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile('C:/Users/Amir/Desktop/Socket.io/View/index.html');
})

app.use(express.static(__dirname + '/View'));

io.on('connection', (socket) => {
    console.log('A User Connected');

    socket.emit('back', {
        message: 'salaaaaaaaaam'
    })

    socket.on('disconnect', () => {
        console.log('A User desconnected');
    })
})

http.listen(4000, () => {
    console.log('Listening on port 4000 ...');
})
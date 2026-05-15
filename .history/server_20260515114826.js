const express = reqire("express");
const app = express();
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

let likes = 0;

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('send_message', (data) => {
        socket.broadcast.emit('receive_message', data);
    });
});

server.listen(3001,() => {
    console.log('SERVER IS RUNNING ON PORT 3001');
});
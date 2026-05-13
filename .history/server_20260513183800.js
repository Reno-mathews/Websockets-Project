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

io.on('conndction', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on()
})
const express = require("express");
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
    console.log(`User Connected: ${socket.id}`);

    socket.emit("update_likes", likes);

    socket.on('add_like', () => {
        likes++;
        console.log(`Total Likes: ${likes}`);

        io.emit("update_likes", likes);
    });
})

server.listen(3001,() => {
    console.log('SERVER IS RUNNING ON PORT 3001');
});
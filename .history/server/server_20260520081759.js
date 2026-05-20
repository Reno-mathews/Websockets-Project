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

let votes ={
    react: 0,
    vue:  0
};

let likes = 0;

io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.emit("update_votes", votes);

    socket.on('add_vote', (framework) => 
        
    });

    socket.on('disconnect', () => {
        console.log("User Disconnected", socket.id);
    });
});

server.listen(3001,() => {
    console.log('SERVER IS RUNNING ON PORT 3001');
});
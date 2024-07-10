const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {

    socket.on("room", (room) => {
        socket.join(room);
    })
    socket.on("message", (payload) => {
        io.to(payload.roomID).emit(payload.message);
    })
});

httpServer.listen(3000);
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const fs = require("fs");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});
// Clear rooms on Loading
fs.writeFileSync("../rooms.json", JSON.stringify({ "roomids": [] }))

io.on("connection", (socket) => {
    socket.on("createroom", async (room) => {
        const data = await JSON.parse(fs.readFileSync("../rooms.json"));
        data.roomids.push(room.id);
        fs.writeFileSync("../rooms.json", JSON.stringify(data));
    })
    socket.on("joinRoom", (room) => {
        console.log(room)
        socket.join(room.room);
        // socket.join("abc");
        console.log("hello")

    })
    socket.on("message", (payload) => {
        // console.log(payload.message)

        io.to(payload.roomID).emit("incoming", payload);
    })
});

httpServer.listen(3000);
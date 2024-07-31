const io = require('socket.io')(3333, { cors: { origin: "*" } });


const users = {}

io.on("connection", socket => {
    console.log("Hello")
    socket.on("join", (name) => {
        users[socket.id] = name
        console.log(`${name} has joined`); // Log a message when a user joins
        socket.broadcast.emit("userJoined", name);
    })
    socket.on("send", data => {
        socket.broadcast.emit("recv", { names: users[socket.id], mess: data })
    })
})
// we need http because we dont have express
const http = require('http')

// we need socket io it's 3rd party
const socketio = require('socket.io');

// we make an http server with node
const server = http.createServer((req, res)=>{
    res.end("I am connected")
})

const io = socketio(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: false
    }
});

io.on("connection", (socket, req)=>{
    // socket.send because socket.emit
    socket.emit("welcome", "Welcome to the websocket server!")
    // no change here
    socket.on("message", (msg) =>{
        console.log(msg);
    })
})

server.listen(8000)
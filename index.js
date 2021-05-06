const express = require ("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const chalk = require("chalk");
app.get("/", (req,res)=>{
 res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket=>{
  socket.on("connection",()=> console.log("ues"))
  socket.on("user typing",userObj =>{
    socket.broadcast.emit("user typing", userObj);
  })
  socket.on("chat message", (userObj)=>{
    console.log("user connected")
    socket.broadcast.emit("chat message", userObj);
  });

  socket.on("disconnect",()=>{
   console.log("user disconnected");
  })
})
const port = 3000 || PORT.env;
server.listen(3000,()=>{
  console.log("listening on " + port);
})
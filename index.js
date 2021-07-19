const express = require("express");

const app = express();
// create server
const http = require("http");
const expressServer = http.createServer(app);
// create server with socket
const { Server } = require("socket.io");
const io = new Server(expressServer);
// check socket connect or disconnect
io.on("connection", (socket) => {
  console.log("new user connected");

  //   // got data from user
  //   socket.on("message", (data) => {
  //     console.log(data);
  //   });

  // custom event got data from user
  socket.on("userData", (data) => {
    console.log(data);
  });

  // create custom event and continue send message
  //   setInterval(() => {
  //     let date = new Date();
  //     let newTime = date.getTime();
  //     socket.emit("customEvent", newTime);
  //   }, 1000);

  //   // continue send message
  //   setInterval(() => {
  //     let date = new Date();
  //     let newTime = date.getTime();
  //     socket.send(newTime);
  //   }, 1000);

  // send message to user form server within 10s
  //   setTimeout(() => {
  //     socket.send("send data from server");
  //   }, 10000);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(5000, () => {
  console.log("5000 port server is listening");
});

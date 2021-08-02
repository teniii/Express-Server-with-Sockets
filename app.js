const express = require("express");

const app = express();
const server = require("http").createServer(app);
const port = 3001;
const io = require("socket.io")( server).listen(server);

io.on("connection", socket => {
    console.log("a user connected :D");
    socket.on("chat message", msg => {
      console.log(msg);
      io.emit("chat message", msg);
    });
  });

  server.listen(port, () => console.log("server running on port:" + port));


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
const express = require("express");
const cors = require("cors");

//creates a express app
var app = express();
var port = 2000 || process.env.port;

//allows body parsing for incoming requests
app.use(express.json());
//cross origin for browsers
app.use(cors());

//ALL ROUTES below this line

//listen on port for server
// 'nodemon server.js' in terminal will start the server
app.listen(port, () => {
  console.log(`server running on ${port}`);
});

const express = require("express");
const connect = require("./config/db");

const server = express();

connect();

server.use(express.json({extended: true}));

server.use("/api/users", require("./routes/users"));

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`listen at ${port}`);
})
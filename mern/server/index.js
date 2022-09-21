const express = require("express");
const connect = require("./config/db");

const server = express();

connect();

server.use(express.json({extended: true}));

const port = process.env.PORT || 8080;

server.use("/api/user", require("./routes/user"));

server.listen(port, () => {
    console.log(`listen at ${port}`);
})
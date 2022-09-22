const mongoose = require("mongoose");
require("dotenv").config({path: "./.env"});

const connect = () => {
    try{
        mongoose.connect(process.env.DB_MONGO);

        console.log("connected");

    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connect;
const moongose = require("mongoose");
require("dotenv").config({path: "./.env"})

const connect = () => {
    try{
        moongose.connect(process.env.DB_MONGO);

        console.log("connect");

    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connect;
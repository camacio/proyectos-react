const User = require("../models/User");

exports.createUser = async (req, res) => {

    const {email, password} = req.body;

    try{
        const user = new User(req.body);
        
        await user.save()

        res.send("create");

    }catch(error){
        res.status(400).send(error);
    }
}
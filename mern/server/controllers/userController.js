const User = require("../models/User");
const bcryptjs = require("bcryptjs");

exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne(email);

    if (user) {
      return res.status(400).json("The user already exists");
    }

    user = new User(req.body);

    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(password, salt);

    await user.save();

    res.json({ msg: "User created successfully" });
  } catch (error) {
    res.status(400).json({ msg: "error" });
  }
};

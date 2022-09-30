const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async function (req, res) {
  const { email, password } = req.body;

  let user = await UserModel.findOne({ email });

  if (!user) {
    return res.send("User Not Found");
  }

  const validatePassword = await bcrypt.compare(password, user.password);
  console.log(validatePassword);

  if (validatePassword) {
    let token = jwt.sign({ role: user.role, email: user.email }, "secret123");
    console.log("token: " + token);
    return res.send({ status: "LoggedIn Successfully", access_token: token });
  } else {
    return res.send("Invalid Password");
  }
};

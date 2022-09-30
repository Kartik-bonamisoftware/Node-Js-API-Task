const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = async function (req, res) {
  const {
    first_name,
    last_name,
    is_active,
    role,
    registeredAt,
    email,
    password,
  } = req.body;

  let user = await UserModel.findOne({ email });

  if (user) {
    return res.send("User Already Exits");
  }

  const hashedPass = await bcrypt.hash(password, 12);

  user = new UserModel({
    first_name,
    last_name,
    is_active,
    role,
    registeredAt,
    email,
    password: hashedPass,
  });

  await user.save();

  res.send("Success");
};

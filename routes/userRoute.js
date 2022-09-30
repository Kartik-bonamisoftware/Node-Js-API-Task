const UserModel = require("../models/User");

module.exports = async function (req, res) {
  try {
    if (req.query.role) {
      let user = await UserModel.find({ role: req.query.role });
      return res.send({
        success: true,
        data: { users: user },
      });
    } else {
      return res.send({
        success: true,
        data: { users: await UserModel.find({}) },
      });
    }
  } catch (err) {
    res.send({ status: "Error", message: err });
  }
};

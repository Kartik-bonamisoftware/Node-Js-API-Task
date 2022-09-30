const UserModel = require("../models/User");

module.exports = async function (req, res) {
  try {
    let user = await UserModel.aggregate([
      { $match: { role: { $in: ["student", "admin", "superAdmin"] } } },
      { $group: { _id: "$role", count: { $sum: 1 } } },
    ]);
    let result = {};
    user.forEach((ele) => Object.assign(result, { [ele._id]: ele.count }));
    return res.send({ success: true, data: result });
  } catch (err) {
    res.send({ status: "Error", message: err });
  }
};

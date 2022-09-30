const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.headers["x-access-token"];
  const { role } = token ? jwt.verify(token, "secret123") : "";
  console.log("Role: " + role);
  if (token && ["admin", "superAdmin"].includes(role)) {
    next();
  } else {
    res.send("Errorr...!!!!");
  }
};

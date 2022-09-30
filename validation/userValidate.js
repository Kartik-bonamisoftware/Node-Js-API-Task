const { body } = require("express-validator");

const loginSchema = [
  body("email")
    .isEmail()
    .withMessage("email must contain a valid email address"),
  // body("firstName").exists({ checkFalsy: true }),
  body("password")
    .isLength({ min: 5 })
    .withMessage("password must be at least 5 characters"),
];

module.exports = loginSchema;

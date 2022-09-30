const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
    },
    role: {
      type: String,
      required: true,
    },
    registeredAt: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("User", userSchema);

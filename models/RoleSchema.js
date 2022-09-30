const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
    },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("role", roleSchema);

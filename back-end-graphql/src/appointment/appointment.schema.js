const mongoose = require("mongoose");

const AppointmenSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    alias: "String",
  },
  creator: {
    type: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    alias: "String",
  },
  created: {
    type: Date,
    default: Date.now(),
    alias: "Date",
  },
  updated: {
    type: Date,
    default: Date.now(),
    alias: "Date",
  },
});
module.exports = mongoose.model("AppointmenSchema", AppointmenSchema);

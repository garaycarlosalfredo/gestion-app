const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    trim: true,
    alias: "String",
  },
  title: {
    type: String,
    required: true,
    trim: true,
    alias: "String",
  },
  description: {
    type: String,
    required: true,
    alias: "String",
  },
  createDate: {
    type: Date,
    default: Date.now(),
    alias: "Date",
  },
  updated: {
    type: Date,
    default: Date.now(),
    alias: "Date",
  },
  tags: [
    {
      type: String,
      required: false,
      trim: true,
      alias: "String",
    },
  ],
});

module.exports = mongoose.model("Appointment", AppointmentSchema);

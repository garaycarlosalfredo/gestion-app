const mongoose = require("mongoose");

const ProfessionalSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    alias: "String",
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    alias: "String",
  },
  numberId: {
    type: String,
    required: true,
    trim: true,
    alias: "String",
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    alias: "String",
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    alias: "String",
  },
  password: {
    type: String,
    required: true,
    trim: true,
    alias: "String",
  },
  appointment: {
    type: String,
    required: true,
    trim: true,
    alias: "String",
  },
  createDate: {
    type: Date,
    default: Date.now(),
    alias: "Date",
  },
});

module.exports = mongoose.model("Professional", ProfessionalSchema);

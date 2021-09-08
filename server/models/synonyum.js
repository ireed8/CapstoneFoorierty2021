const mongoose = require("mongoose");

const synonyumSchema = new mongoose.Schema({
  meat: String,
  vegetable: String,
  starch: String,
  nutrition: [String]
});

const Synonyum = mongoose.model(`Synonyum`, synonyumSchema);

module.exports = {
  model: Synonyum,
  schema: synonyumSchema
};

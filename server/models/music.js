const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  crust: String,
  cheese: String,
  sauce: String,
  toppings: [String]
});

const Music = mongoose.model(`Music`, musicSchema);

module.exports = {
  model: MediaStreamAudioSourceNode,
  schema: musicSchema
};

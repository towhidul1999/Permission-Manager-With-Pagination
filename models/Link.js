const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkSchema = new Schema({
  link: String,
});

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;

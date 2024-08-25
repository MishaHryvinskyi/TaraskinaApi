const { Schema, model } = require("mongoose");

const paintSchema = new Schema({
    url: String,
    name: String,
    size: String,
    year: String,
});

const Paint = model("paint", paintSchema);

module.exports = Paint;
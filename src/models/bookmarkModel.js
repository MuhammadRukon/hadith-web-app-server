const { Schema, model } = require("mongoose");

const bookmarkSchema = new Schema({
  hadiths: [{ type: Schema.Types.ObjectId, ref: "Hadith" }],
  email: { type: String, Required: true, Unique: true },
});
const book = model("book", bookmarkSchema);

module.exports = book;

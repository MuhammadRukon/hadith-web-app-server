const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  name: {
    bn: { type: String, Required: true, Unique: true },
    en: { type: String, Required: true, Unique: true },
  },
  hadith_range: {
    en: { type: Number, default: 0 },
    bn: { type: String, default: "0" },
  },
  chapters: [{ type: Schema.Types.ObjectId, ref: "Chapter" }],
});
const book = model("book", bookSchema);

module.exports = book;

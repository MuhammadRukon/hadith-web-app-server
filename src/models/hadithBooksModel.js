const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const hadithBookSchema = new Schema({
  book_name: {
    bn: { type: String, required: true, unique:true },
    en: { type: String, required: true, unique: true },
  },
  hadith_range: {
    en: { type: Number, default: 0 },
    bn: { type: String, default: "0" },
  },
  chapters: [
    {
      chapter_name: {
        bn: { type: String },
        en: { type: String },
      },
    },
  ],
});

const HadithBook = model("HadithBook", hadithBookSchema);

module.exports = HadithBook;

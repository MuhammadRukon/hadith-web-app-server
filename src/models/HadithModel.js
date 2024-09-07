const { model, Schema } = require("mongoose");

const hadithSchema = new Schema({
  text: {
    bn: { type: String, Required: true },
    en: { type: String, Required: true },
  },
  authenticity: {
    bn: { type: String, Required: true },
    en: { type: String, Required: true },
  },
  narrator: {
    bn: { type: String, Required: true },
    en: { type: String, Required: true },
  },
  colorCode: { type: String, Required: true },
  chapter_id: { type: String, Required: true },
  book_id: { type: String, Required: true },
  subject_id: { type: String, Required: true },
});

const Hadith = model("hadith", hadithSchema);

module.exports = { Hadith, hadithSchema };

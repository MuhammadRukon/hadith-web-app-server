const { model, Schema } = require("mongoose");

const hadithSchema = new Schema({
  text: {
    bn: { type: String, Required: true },
    en: { type: String, Required: true },
    ar: { type: String, Required: true },
  },
  authenticity: {
    bn: { type: String, Required: true },
    en: { type: String, Required: true },
  },
  narrator: {
    bn: { type: String, Required: true },
    en: { type: String, Required: true },
  },
  chapter_id:{type: String, Required:true},
  book_id:{type:String, Required:true}
});

const hadithModel = model("hadith", hadithSchema);

module.exports = {hadithModel, hadithSchema};

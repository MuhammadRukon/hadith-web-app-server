const { Schema, model } = require("mongoose");

const subjectSchema = new Schema({
  name: {
    bn: { type: String, Required: true, Unique: true },
    en: { type: String, Required: true, Unique: true },
  },
  hadith_range: {
    en: { type: Number, default: 0 },
    bn: { type: String, default: "0" },
  },
});

const Subject = model("Subject", subjectSchema);

module.exports = { Subject, subjectSchema };

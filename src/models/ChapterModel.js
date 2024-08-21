const { Schema, model } = require("mongoose");

const chapterSchema = new Schema({
  name: {
    bn: { type: String, Required: true },
    en: { type: String, Required: true },
  }
});

const chapter = model("chapter", chapterSchema);

module.exports = {chapter, chapterSchema};
const { Schema, model } = require('mongoose');


const chapterSchema = new Schema({
  name: {
    bn: { type: String, required: true },
    en: { type: String, required: true },
  },
  book_id: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
});


const Chapter = model('Chapter', chapterSchema);

module.exports = Chapter;

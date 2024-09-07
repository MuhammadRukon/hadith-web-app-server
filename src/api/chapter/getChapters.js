const Chapter = require("../../models/ChapterModel");

const getChapters = async (req, res) => {
    const { id } = req.params;
  try {
    const chapters = await Chapter.find({book_id: id});
    res.json(chapters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getChapters;
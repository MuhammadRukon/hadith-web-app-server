const book = require("../../models/bookModel");
const Chapter = require("../../models/ChapterModel");

const addChapter = async (req, res) => {
  try {
    const { name, book_id } = req.body;

    const hadithBook = await book
      .findById(book_id)
      .populate("chapters", "name");

    const chapterExists = hadithBook.chapters.some(
      (existingChapter) =>
        existingChapter.name.bn === name.bn ||
        existingChapter.name.en === name.en
    );

    if (chapterExists) {
      return res.status(400).json({
        status: 400,
        message: "Chapter with this name already exists in this book.",
      });
    }

    const newChapter = await Chapter.create({ name, book_id });

    const updatedBook = await book.findByIdAndUpdate(
      book_id,
      { $push: { chapters: newChapter._id } },
      { new: true }
    );

    res.send({
      status: 200,
      response: { chapter: newChapter, bookUpdate: updatedBook },
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = addChapter;

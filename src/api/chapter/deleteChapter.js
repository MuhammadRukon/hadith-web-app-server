const book = require("../../models/bookModel");
const Chapter = require("../../models/ChapterModel");

const deleteChapter = async (req, res) => {
  const { id } = req.params;
  try {
    //  Find the chapter first to get book_id
    const chapterDelete = await Chapter.findById(id);
    if (!chapterDelete) {
      return res.status(404).send({ message: "chapter not found" });
    }

    const { book_id } = chapterDelete;

    //Delete the chapter
    await Chapter.findByIdAndDelete(id);

    // Update book
    await book.findByIdAndUpdate(
      book_id,
      { $pull: { chapters: id } },
      { new: true }
    );
    res.send({
      status: 200,
      message: "chapter successfully delete",
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = deleteChapter;

const HadithBook = require("../../../models/hadithBooksModel");

const getAllHadithBooks = async (req, res) => {
  try {
    const hadithBooks = await HadithBook.find();
    res.json(hadithBooks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getAllHadithBooks;
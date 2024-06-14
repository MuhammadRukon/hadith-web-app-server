const HadithBook = require("../../../models/hadithBooksModel");

const addHadithBook = async (req, res) => {
  try {
    const { bookNameEn, bookNameBn } = req.body;
    const data = {
      book_name: {
        bn: bookNameBn,
        en: bookNameEn,
      },
    };
    const newHadithBook = new HadithBook(data);
    const response = await newHadithBook.save();
    res.send(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = addHadithBook;

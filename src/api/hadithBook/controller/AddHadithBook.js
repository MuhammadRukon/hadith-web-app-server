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
    res.send({status:200, response:response});
  } catch (err) {
    res.status(500).json({ status:500, message: err.message || err.errmsg });
  }
};

module.exports = addHadithBook;

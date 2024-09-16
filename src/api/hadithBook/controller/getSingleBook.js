const book = require("../../../models/bookModel");

const getSingleBook = async (req, res) => {
  try {
    const books = await book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = getSingleBook;

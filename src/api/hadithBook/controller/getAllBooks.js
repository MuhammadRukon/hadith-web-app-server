const book = require("../../../models/bookModel");

const getAllBooks = async (req, res) => {
  try {
    const books = await book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getAllBooks;
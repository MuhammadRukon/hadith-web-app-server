const book = require("../../../models/bookModel");

const addBook = async (req, res) => {
  try {
    const { bookNameEn, bookNameBn } = req.body;
    const data = {
      name: {
        bn: bookNameBn,
        en: bookNameEn,
      },
    };
    const newBook = new book(data);
    const response = await newBook.save();
    res.send({ status: 200, response: response });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = addBook;

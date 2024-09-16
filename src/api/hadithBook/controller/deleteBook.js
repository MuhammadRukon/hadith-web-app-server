const book = require("../../../models/bookModel");

const deleteBook = async (req, res) => {
  const { id } = req.params;
  console.log(id, "delete book");
  try {
    //Delete book
    await book.findByIdAndDelete(id);
    res.send({
      status: 200,
      message: "book successfully delete",
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = deleteBook;

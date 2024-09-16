const { Hadith } = require("../../models/HadithModel");

const getHadith = async (req, res) => {
  const data = req.query;

  let filter = {};
  if (data.book_id && data.chapter_id) {
    filter = { book_id: data.book_id, chapter_id: data.chapter_id };
  }
  console.log(filter, "filter");
  try {
    const response = await Hadith.find(filter);
    console.log(response);
    res.send({ status: 200, response: response });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = getHadith;

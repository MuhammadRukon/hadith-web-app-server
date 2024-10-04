const { Hadith } = require("../../models/HadithModel");

const getSearchedHadith = async (req, res) => {
  const data = req.query;
  try {
    const response = await Hadith.find(
      { $text: { $search: data.q } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });

    res.send({ status: 200, response: response });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = getSearchedHadith;

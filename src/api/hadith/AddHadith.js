const book = require("../../models/bookModel");
const { Hadith } = require("../../models/HadithModel");
const { Subject } = require("../../models/subjectModel");

const convertBengaliToEnglish = (bengaliStr) => {
  const bnToEnMap = {
    "০": "0",
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
  };

  return bengaliStr.replace(/[০-৯]/g, (match) => bnToEnMap[match]);
};

const addHadith = async (req, res) => {
  const data = req.body;
  if (
    data.text.en == "" ||
    data.text.bn == "" ||
    data.narrator.en == "" ||
    data.narrator.bn == "" ||
    data.authenticity.en == "" ||
    data.authenticity.bn == "" ||
    data.chapter_id == "" ||
    data.book_id == "" ||
    data.subject_id == "" ||
    data.colorCode == ""
  ) {
    return res.status(400).send({ message: "Empty fields" });
  }

  try {
    const response = await Hadith.create(data);

    if (response) {
      const updateBook = await book.findById(data.book_id);

      if (!updateBook) {
        return res.status(404).send({ message: "Book not found" });
      }

      const hadithRangeBnEnglish = convertBengaliToEnglish(
        updateBook.hadith_range.bn
      );

      const newHadithRangeBn = (
        parseInt(hadithRangeBnEnglish, 10) + 1
      ).toLocaleString("bn");

      
      await book.findByIdAndUpdate(
        data.book_id,
        {
          $inc: { "hadith_range.en": 1 },
          "hadith_range.bn": newHadithRangeBn,
        },
        { new: true }
      );

     const responseSubject =  await Subject.findByIdAndUpdate(
      data.subject_id,
      {
        $inc: { "hadith_range.en": 1 },
        "hadith_range.bn": newHadithRangeBn,
      },
      { new: true }
    )
    console.log(responseSubject, "response subject");
    }

    res.send({ status: 200, response });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = addHadith;

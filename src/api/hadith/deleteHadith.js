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

const deleteHadith = async (req, res) => {
  const { id } = req.params;

  try {
    //  Find the Hadith first to get book_id and subject_id
    const hadithToDelete = await Hadith.findById(id);

    if (!hadithToDelete) {
      return res.status(404).send({ message: "Hadith not found" });
    }

    const { book_id, subject_id } = hadithToDelete;

    //Delete the Hadith
    await Hadith.findByIdAndDelete(id);

    // Update book
    const bookToUpdate = await book.findById(book_id);
    if (bookToUpdate) {
      const hadithRangeBnEnglish = convertBengaliToEnglish(
        bookToUpdate.hadith_range.bn
      );
      const newHadithRangeBn = (
        parseInt(hadithRangeBnEnglish, 10) - 1
      ).toLocaleString("bn");

      await book.findByIdAndUpdate(
        book_id,
        {
          $inc: { "hadith_range.en": -1 },
          "hadith_range.bn": newHadithRangeBn,
        },
        { new: true }
      );
    }

    // Update subject
    const subjectToUpdate = await Subject.findById(subject_id);
    if (subjectToUpdate) {
      const hadithRangeBnEnglish = convertBengaliToEnglish(
        subjectToUpdate.hadith_range.bn
      );
      const newHadithRangeBn = (
        parseInt(hadithRangeBnEnglish, 10) - 1
      ).toLocaleString("bn");

      await Subject.findByIdAndUpdate(
        subject_id,
        {
          $inc: { "hadith_range.en": -1 },
          "hadith_range.bn": newHadithRangeBn,
        },
        { new: true }
      );
    }

    res.send({
      status: 200,
      message: "Hadith deleted and hadith_range updated successfully",
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = deleteHadith;

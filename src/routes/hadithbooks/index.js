const express = require("express");
const getAllHadithBooks = require("../../api/hadithBook/controller/getAllHadithBooks");
const addHadithBook = require("../../api/hadithBook/controller/AddHadithBook");
const router = express.Router();

router.get("/hadith-books", getAllHadithBooks);
router.post("/add-hadith-book", addHadithBook)

module.exports = router;
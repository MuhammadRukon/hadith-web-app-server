const express = require("express");
const getAllHadithBooks = require("../../api/hadithBook/controller/getAllHadithBooks");
const router = express.Router();

router.get("/hadith-books", getAllHadithBooks);

module.exports = router;
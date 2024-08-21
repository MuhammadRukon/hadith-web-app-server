const express = require("express");
const getAllBooks = require("../../api/hadithBook/controller/getAllBooks");
const addBook = require("../../api/hadithBook/controller/AddBook");
const getSingleBook = require("../../api/hadithBook/controller/getSingleBook");
const addChapter = require("../../api/hadithBook/controller/AddChapter");

const router = express.Router();

router.get("/hadith-books", getAllBooks);
router.post("/add-hadith-book", addBook);
router.get("/hadith-books/:id", getSingleBook)
router.post("/hadith-books/chapter/add", addChapter)

module.exports = router;
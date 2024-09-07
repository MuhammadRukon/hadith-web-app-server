const express = require("express");
const getAllBooks = require("../../api/hadithBook/controller/getAllBooks");
const addBook = require("../../api/hadithBook/controller/AddBook");
const getSingleBook = require("../../api/hadithBook/controller/getSingleBook");
const addChapter = require("../../api/chapter/AddChapter");
const addHadith = require("../../api/hadith/AddHadith");
const getHadith = require("../../api/hadith/GetHadith");
const getSubjects = require("../../api/subject/getSubjects");
const addSubject = require("../../api/subject/addSubject");
const getChapters = require("../../api/chapter/getChapters");

const router = express.Router();

router.get("/hadith-books", getAllBooks);
router.post("/add-hadith-book", addBook);
router.get("/hadith-books/:id", getSingleBook)
router.post("/hadith-books/chapter/add", addChapter)

router.get('/chapters/:id', getChapters)

router.route('/subjects').get(getSubjects).post(addSubject)

router.route('/hadiths').get(getHadith).post(addHadith)




module.exports = router;
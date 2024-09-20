const express = require("express");
const getAllBooks = require("../api/hadithBook/controller/getAllBooks");
const addBook = require("../api/hadithBook/controller/AddBook");
const getSingleBook = require("../api/hadithBook/controller/getSingleBook");
const addChapter = require("../api/chapter/AddChapter");
const addHadith = require("../api/hadith/AddHadith");
const getHadith = require("../api/hadith/GetHadith");
const getSubjects = require("../api/subject/getSubjects");
const addSubject = require("../api/subject/addSubject");
const getChapters = require("../api/chapter/getChapters");
const deleteChapter = require("../api/chapter/deleteChapter");
const deleteBook = require("../api/hadithBook/controller/deleteBook");
const deleteSubject = require("../api/subject/deleteSubject");
const deleteHadith = require("../api/hadith/deleteHadith");
const addUser = require("../api/user/addUser");
const deleteUser = require("../api/user/deleteUser");
const getUsers = require("../api/user/getUsers");
const getSingleUser = require("../api/user/getSingleUser");
const addBookmark = require("../api/bookmark/addBookmark");
const getBookmarks = require("../api/bookmark/getBookmarks");
const deleteBookmark = require("../api/bookmark/deleteBookmark");
const getSearchedHadith = require("../api/hadith/getSearchedHadith");

const router = express.Router();

router.get("/hadith-books", getAllBooks);
router.post("/add-hadith-book", addBook);
router.route("/hadith-books/:id").get(getSingleBook).delete(deleteBook);

router.post("/hadith-books/chapter/add", addChapter);
router.route("/chapters/:id").get(getChapters).delete(deleteChapter);

router.route("/subjects").get(getSubjects).post(addSubject);
router.route("/subjects/:id").delete(deleteSubject);

router.route("/hadiths").get(getHadith).post(addHadith);
router.route("/hadiths/:id").delete(deleteHadith);

router.route("/users").get(getUsers).post(addUser);
router.route("/users/:id").get(getSingleUser).delete(deleteUser);

router.route("/bookmarks").get(getBookmarks).post(addBookmark);
router.route("/bookmarks/:email").get(getBookmarks).delete(deleteBookmark);

router.get("/search-hadith", getSearchedHadith);

module.exports = router;

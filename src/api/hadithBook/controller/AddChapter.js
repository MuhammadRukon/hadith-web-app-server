const book = require("../../../models/bookModel");

const addChapter = async (req,res)=>{
try {

    const {name, book_id} = req.body;
    const chapter = {name}
    const hadithBook = await book.findOne({_id:book_id});
    hadithBook.chapters.push(chapter)
    const response = await hadithBook.save();
    console.log(response);
    res.send({status:200, response:response});
} catch (err) {
    res.status(500).json({ status:500, message: err.message || err.errmsg });
}

}
module.exports = addChapter;
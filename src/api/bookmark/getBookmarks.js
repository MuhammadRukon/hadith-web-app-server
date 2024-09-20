const User = require("../../models/userModel");

const getBookmarks = async (req, res) => {
  const { email } = req.params;
  try {
    const bookmarks = await User.findOne({ email: email }).populate(
      "bookmarks"
    );
    res.send({ status: 200, response: bookmarks });
    console.log(bookmarks, "bookmarks");
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = getBookmarks;

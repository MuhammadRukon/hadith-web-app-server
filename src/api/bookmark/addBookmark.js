const User = require("../../models/userModel");

const toggleBookmark = async (req, res) => {
  const { email, hadith } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ status: 404, message: "User not found" });
    }

    const isBookmarked = user.bookmarks.includes(hadith);

    let response;
    if (isBookmarked) {
      response = await User.findByIdAndUpdate(
        user._id,
        { $pull: { bookmarks: hadith } },
        { new: true }
      );
    } else {
      response = await User.findByIdAndUpdate(
        user._id,
        { $addToSet: { bookmarks: hadith } },
        { new: true }
      );
    }

    return res.status(200).json({ status: 200, response });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = toggleBookmark;

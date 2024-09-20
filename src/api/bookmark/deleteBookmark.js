const User = require("../../models/userModel");

const deleteBookmark = async (req, res) => {
  const { email } = req.params;
  try {
    // update users bookmarks
    const user = await User.find({ email: email });

    if (user) {
      const response = await User.findByIdAndUpdate(
        email,
        {
          $pull: { bookmarks: id },
        },
        { new: true }
      );
      res.send({ status: 200, response: response });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = deleteBookmark;

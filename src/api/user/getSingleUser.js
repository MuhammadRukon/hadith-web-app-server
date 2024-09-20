const User = require("../../models/userModel");

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  console.log(id, "id");
  try {
    const user = await User.findOne({ email: id });
    res.send(user);
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = getSingleUser;

const User = require("../../models/userModel");

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await User.findByIdAndDelete(id);
    res.send({ status: 200, response: response });
  } catch (error) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = deleteUser;

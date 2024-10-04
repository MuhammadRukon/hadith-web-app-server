const User = require("../../models/userModel");

const addUser = async (req, res) => {
  const data = req.body;
  try {
    const response = await User.create(data);
    res.send({ status: 200, response: response });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = addUser;

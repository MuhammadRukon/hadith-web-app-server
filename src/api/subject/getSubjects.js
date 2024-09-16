const { Subject } = require("../../models/subjectModel");

const getSubjects = async (req, res) => {
  try {
    const response = await Subject.find();
    res.send({ status: 200, response: response });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = getSubjects;

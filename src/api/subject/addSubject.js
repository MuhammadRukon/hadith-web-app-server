const { Subject } = require("../../models/subjectModel");

const addSubject = async (req, res) => {
  const data = req.body;
  try {
    const response = await Subject.create(data);
    res.send({ status: 200, response: response });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = addSubject;

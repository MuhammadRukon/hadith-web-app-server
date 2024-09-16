const { Subject } = require("../../models/subjectModel");

const deleteSubject = async (req, res) => {
  const { id } = req.params;
  try {
    //Delete book
    await Subject.findByIdAndDelete(id);
    res.send({
      status: 200,
      message: "subject successfully delete",
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};

module.exports = deleteSubject;

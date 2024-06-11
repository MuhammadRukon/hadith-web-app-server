const handleNotFound = (req, res, next) => {
  const error = new Error(`The requested URL "${req.url}" does not exist.`);
  error.status = 404;
  next(error);
};

module.exports = handleNotFound;

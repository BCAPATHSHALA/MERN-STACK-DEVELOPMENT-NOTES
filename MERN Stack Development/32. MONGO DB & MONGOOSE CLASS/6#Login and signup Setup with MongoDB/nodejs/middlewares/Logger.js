const log = (req, res, next) => {
  console.log("signup middleware");
  next();
};

module.exports = log;

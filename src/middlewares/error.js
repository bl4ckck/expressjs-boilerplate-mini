const errorMsg = require('../utils/errorMessage');

const notFound = (req, res, next) => {
  const error = { message: `🔍 - Not Found - ${req.originalUrl}`};
  res.status(404);
  next(error);
}

const errorHandler = (err, req, res, next) => {
  console.log(err)
  const { code, error, message } = err;
  const status = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(code ?? status).send(errorMsg(code ?? status, error, message));
}

module.exports = {
  errorHandler,
  notFound
};

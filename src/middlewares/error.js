const notFound = (req, res, next) => {
  const error = `🔍 - Not Found - ${req.originalUrl}`;
  res.status(404);
  next(error);
}

const errorHandler = (err, req, res, next) => {
  const status = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(status).send({ error: err });
}

module.exports = {
  errorHandler,
  notFound
};

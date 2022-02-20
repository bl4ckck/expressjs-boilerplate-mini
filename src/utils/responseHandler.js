/**
 *
 * * example: `responseHandler(res, 200, data);`
 * @param {any} res - response object
 * @param {number | undefined} status - status code
 * @param {any} data - payload
 * @returns response object `{ status, data }`
 *
 */
const responseHandler = (res, status, data) =>
  res.status(status).send({ status, data });

module.exports = responseHandler;

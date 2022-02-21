/**
 *
 * * example: `responseHandler(res, 200, data);`
 * @param {any} res - response object
 * @param {number} code - status code
 * @param {any} data - payload
 * @returns response object `{ code, data }`
 *
 */
const responseHandler = (res, code, data) =>
  res.status(code).send({ code, data });

module.exports = responseHandler;

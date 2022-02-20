require('dotenv').config();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

/**
 *
 * @param {*} payload - payload to be signed
 * @returns {string} signed token
 */
const sign = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    algorithm: 'HS384',
    expiresIn: '1h',
  });
};

/**
 *
 * @param {string} token - token to be verified
 * @returns {jwt.JwtPayload} payload token
 */
const verify = (token) => {
  return jwt.verify(token, JWT_SECRET, {
    algorithms: ['HS384'],
  });
};

/**
 *
 * @param {*} req
 * @returns {jwt.JwtPayload} payload token
 */
const getPayloadCookies = (req) => {
  const token = req.cookies._acct;
  const payload = jwt.decode(token, JWT_SECRET);
  return payload;
};

module.exports = {
  sign,
  verify,
  getPayloadCookies,
};

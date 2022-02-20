const bcrypt = require('bcryptjs');
const saltRounds = 12;

/**
 *
 * @param {string} plain - plain password
 * @returns {Promise<string>} encrypted password
 */
const hash = async (plain) => await bcrypt.hash(plain, saltRounds);

/**
 *
 * @param {string} plain - plain password
 * @param {string} encrypted - encrypted password
 * @returns {boolean}
 */
const compare = (plain, encrypted) => bcrypt.compareSync(plain, encrypted);

module.exports = {
  hash,
  compare,
};

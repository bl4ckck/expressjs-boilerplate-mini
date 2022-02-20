const { User, Client } = require('../models');

class UsersService {
  /**
   *
   * @returns {Promise<any>} all user data
   */
  static async findAll() {
    return await User.findAll();
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<any>} user data
   */
  static async findOne(id) {
    return await User.findOne({ where: { id } });
  }

  /**
   * Find user by email for authentication
   * @param {string} email
   * @returns {Promise<any>}
   */
  static async findOneAuth(email) {
      const data = await User.findOne({
        attributes: ['id', 'roles', 'email', 'password'],
        include: [
          {
            model: Client,
            attributes: ['name', 'phone'],
          },
        ],
        raw: true,
        where: { email },
      }) ?? null;

      if(!data) throw Error('User not found');
      return data
  }

  /**
   *
   * @param {string} id
   * @param {any} payload
   * @returns {Promise<any>}
   */
  static async update(id, payload) {
    return await User.update(payload, { where: { id } });
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<any>}
   */
  static async remove(id) {
    return await User.destroy({ where: { id } });
  }
}

module.exports = UsersService;

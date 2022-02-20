const { Client, User } = require('../models');

class ClientsService {
  /**
   *
   * @returns {Promise<any>} all client data
   */
  static async findAll() {
    return await Client.findAll();
  }

  /**
   * Find all client relations with user
   * @returns {Promise<any>}
   */
  static async findAllRelUser() {
    return await Client.findAll({
        include: [
          {
            model: User,
            attributes: ['email', 'roles'],
          },
        ],
        raw: true,
      });
  };

  /**
   *
   * @param {string} id
   * @returns {Promise<any>} client data
   */
  static async findOne(id) {
    return await Client.findOne({ where: { id } });
  }

  /**
   *
   * @param {string} id
   * @param {any} payload
   * @returns {Promise<any>}
   */
  static async update(id, payload) {
    return await Client.update(payload, { where: { id } });
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<any>}
   */
  static async remove(id) {
    return await Client.destroy({ where: { id } });
  }
}

module.exports = ClientsService;

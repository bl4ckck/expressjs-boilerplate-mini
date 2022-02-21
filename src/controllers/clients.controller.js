const ClientsService = require('../services/clients.service');
const responseHandler = require('../utils/responseHandler');
const errMsg = require('../utils/errorMessage');

class ClientsController {
  static async findAll(req, res, next) {
    try {
      const data = await ClientsService.findAll();
      return responseHandler(res, 200, data);
    } catch (error) {
      next(errMsg(400, error, error.message));
    }
  }

  static async findAllRelUser(req, res, next) {
    try {
      const data = await ClientsService.findAllRelUser();
      return responseHandler(res, 200, data);
    } catch (error) {
      next(errMsg(400, error, error.message));
    }
  }
}

module.exports = ClientsController;

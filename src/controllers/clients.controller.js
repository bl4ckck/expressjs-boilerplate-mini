const ClientsService = require('../services/clients.service');
const responseHandler = require('../utils/responseHandler');

class ClientsController {
  static async findAll(req, res, next) {
    try {
      const data = await ClientsService.findAll();
      return responseHandler(res, 200, data);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async findAllRelUser(req, res, next) {
    try {
      const data = await ClientsService.findAllRelUser();
      return responseHandler(res, 200, data);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }
}

module.exports = ClientsController;

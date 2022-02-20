const UsersService = require('../services/users.service');
const responseHandler = require('../utils/responseHandler');

class UsersController {
  static async findAll(req, res, next) {
    try {
      const data = await UsersService.findAll();
      return responseHandler(res, 200, data);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }
}

module.exports = UsersController;

const COOKIE_CONFIG = require('../config/cookies');

const UsersService = require('../services/users.service');
const responseHandler = require('../utils/responseHandler');
const jwt = require('../utils/jwt');

class AuthController {
  static login(req, res, next) {
    // Check if query redirect is exist
    const { redirect } = req.query;
    // Sign JWT
    const token = jwt.sign(req.user);
    // Set Cookies
    res.cookie('_acct', token, COOKIE_CONFIG);
    return redirect ? res.redirect('/') : responseHandler(res, 200, { token });
  }

  static logout(req, res, next) {
    const { redirect } = req.query;
    res.clearCookie('_acct', { path: COOKIE_CONFIG.path });
    return redirect ? res.redirect('/') : responseHandler(res, 200, { message: 'Logout success' });
  }
}

module.exports = AuthController;

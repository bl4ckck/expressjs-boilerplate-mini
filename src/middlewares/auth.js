const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserServices = require('../services/users.service');

const errorMsg = require('../utils/errorMessage');
const bcrypt = require('../utils/bcrypt');
const jwt = require('../utils/jwt');

/**
 * Passport local strategy
 */
const localAuth = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await UserServices.findOneAuth(email);
      const passwordCheck = bcrypt.compare(password, user.password);
      // Check email & password
      if (!user.email || !passwordCheck) {
        return done({
          message: 'Email or password incorrect',
        });
      }
      // Delete key password
      delete user['password'];
      // Return user
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);

/**
 * Middleware route login
 */
const onLogin = (req, res, next) => {
  passport.authenticate('local', { session: false }, (error, user, info) => {
    // Check if query redirect is exist
    const { redirect } = req.query;
    const msg = 'Authentication failed';
    // Error checking
    if (error) {
      req.flash('error', error.message);
      return redirect ? res.redirect('/login') : next(errorMsg(401, null, error.message));
    }
    if (!user) {
      req.flash('error', 'Email or password incorrect');
      return redirect ? res.redirect('/login') : next(errorMsg(401, null, msg));
    }
    // Do Login
    req.user = user;
    return next();
  })(req, res, next);
};

/**
 * Authorization validation
 * @param {boolean} isRedirect - Check if its request from view or API
 * @returns {any} Next to controller or redirect
 */
const tokenCheck = (isRedirect) => (req, res, next) => {
  const token = req.cookies._acct;
  const msg = 'Authorization failed';
  // Check if cookie exist
  if (!token) {
    req.flash('error', 'Please login');
    return isRedirect ? res.redirect('/login') : next(errorMsg(403, null, msg));
  }
  // Check token & user ID
  const payload = jwt.verify(token);
  console.log(payload);
  if (!payload.id) {
    //TODO: test this
    req.flash('error', 'Please login');
    return isRedirect ? res.redirect('/login') : next(errorMsg(403, null, msg));
  }
  // Valid
  return next();
};
const tokenCheckAPI = tokenCheck(false);
const tokenCheckView = tokenCheck(true);

/**
 * Check if session exist, then user can't access login page
 * @returns {any} Next to controller or redirect
 */
const preventLogin = (req, res, next) => {
  const token = req.cookies._acct;
  if(!token) return next();
  const validToken = jwt.verify(token);
  return validToken ? res.redirect('/') : next();
}

module.exports = {
  localAuth,
  onLogin,
  tokenCheckAPI,
  tokenCheckView,
  preventLogin,
};

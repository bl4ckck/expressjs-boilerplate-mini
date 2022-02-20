const express = require('express');
const router = express.Router();
const C_AUTH = require('../../controllers').authController;
const { onLogin } = require('../../middlewares/auth');

/*
 * LOGIN
 */
router.post('/login', onLogin, C_AUTH.login);

/*
 * LOGOUT
 */
//TODO: MDL for logout
router.get('/logout', C_AUTH.logout);

module.exports = router;

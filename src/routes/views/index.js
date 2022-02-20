/**
 * Ejs Routes
 */
const express = require('express');
const router = express.Router();
const C_VIEWS = require('../../controllers').viewsController;

const { tokenCheckView, preventLogin } = require('../../middlewares/auth');

// Sub Ejs Routes
// const vendor = require('./vendor');

router.get('/', tokenCheckView, C_VIEWS.home);
router.get('/login', preventLogin, C_VIEWS.login);
// router.use('/vendor', vendor);

module.exports = router;

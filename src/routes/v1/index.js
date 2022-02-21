const express = require('express');
const router = express.Router();

const auth = require('./auth.route');
const docs = require('./docs.route');
const users = require('./users.route');
const clients = require('./clients.route');

const { tokenCheckAPI } = require('../../middlewares/auth');

// Documentation route
router.use('/', docs);
router.use('/auth', auth);
router.use('/users', tokenCheckAPI, users);
router.use('/clients', tokenCheckAPI, clients);

module.exports = router;

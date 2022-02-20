const express = require('express');
const router = express.Router();

const auth = require('./auth.route');
const users = require('./users.route');
const clients = require('./clients.route');

const { tokenCheckAPI } = require('../../middlewares/auth');

router.use('/auth', auth);
router.use('/users', tokenCheckAPI, users);
router.use('/clients', tokenCheckAPI, clients);

module.exports = router;

const express = require('express');
const router = express.Router();
const C_USER = require('../../controllers').usersController;

router.get('/', C_USER.findAll);

module.exports = router;

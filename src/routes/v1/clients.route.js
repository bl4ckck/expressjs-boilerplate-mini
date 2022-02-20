const express = require('express');
const router = express.Router();
const C_CLIENT = require('../../controllers').clientController;

router.get('/', C_CLIENT.findAll);
router.get('/r/users', C_CLIENT.findAllRelUser);

module.exports = router;

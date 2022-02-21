const express = require('express');
const router = express.Router();
const C_CLIENT = require('../../controllers').clientController;

router.get('/', C_CLIENT.findAll);
router.get('/r/users', C_CLIENT.findAllRelUser);

/**
 * @swagger
 * tags:
 *   name: Client
 *   description: Client data
 */

/**
 * @swagger
 * /clients:
 *   get:
 *     summary: Get all clients data
 *     tags: [Client]
 *     responses:
 *       "200":
 *         description: Success login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseHandler'
 */

module.exports = router;

const express = require('express');
const router = express.Router();
const C_AUTH = require('../../controllers').authController;
const { onLogin, tokenCheckAPI } = require('../../middlewares/auth');

/**
 * JWT CHECK
 */
router.get('/token-check', tokenCheckAPI, C_AUTH.checkPayload);

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

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication
 */
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login and set token to cookies
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         'application/json':
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             example:
 *               email: client@gmail.com
 *               password: '123456'
 *     responses:
 *       "200":
 *         description: Success login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseHandler'
 *             example:
 *               code: 200
 *               data:
 *                  token: JWT
 *       "401":
 *         description: Invalid email or password
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 401
 *               error:
 *               message: Invalid email or password
 */

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     summary: Logout
 *     tags: [Auth]
 *     responses:
 *       "200":
 *         description: Logout success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseHandler'
 *             example:
 *               code: 200
 *               data:
 *                  message: Logout success
 */

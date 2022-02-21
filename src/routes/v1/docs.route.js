const express = require('express');
const router = express.Router();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerDefinition = require('../../docs');
const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: ['src/docs/*.yml', 'src/routes/v1/*.js'],
});

// Documentation route
router.use('/', swaggerUI.serve);
router.get(
  '/',
  swaggerUI.setup(specs, {
    explorer: true,
  })
);

module.exports = router;

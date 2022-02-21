// https://editor.swagger.io/

const info = require('./info');
const server = require('./server');

const swaggerDefinition = { ...info, ...server };

module.exports = {
  ...swaggerDefinition,
};

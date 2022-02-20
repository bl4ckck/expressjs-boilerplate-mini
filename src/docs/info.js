const swaggerInfo = {
  openapi: '3.0.0',
  info: {
    title: 'boilerplate-mini',
    version: '1.0.0',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  basePath: '/api/v1',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
};

module.exports = swaggerInfo;

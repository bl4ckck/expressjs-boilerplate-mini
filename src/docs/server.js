const port = process.env.PORT || 3000;

const swaggerServer = {
  servers: [
    {
      url: `http://localhost:${port}/api/v1`,
    },
  ],
};

module.exports = swaggerServer;

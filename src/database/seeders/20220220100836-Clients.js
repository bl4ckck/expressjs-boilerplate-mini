'use strict';
const { v4: uuid } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Clients',
      [
        {
          id: uuid(),
          UserId: '048f9855-1ec7-4bdb-94ac-f7af68494dba',
          name: 'Alvin Naufal',
          phone: '0812345678',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clients', null, {});
  },
};

'use strict';
const { v4: uuid } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: '048f9855-1ec7-4bdb-94ac-f7af68494dba',
          roles: 'CLIENT',
          email: 'client@gmail.com',
          password: '$2a$12$FwwT011r.rKUHWb8grk69OTLM39Y35fjpBA0vmmBnmjE4gJnFkMy2',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

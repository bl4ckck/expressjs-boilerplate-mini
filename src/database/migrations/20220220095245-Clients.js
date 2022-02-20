'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      UserId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
        onUpdate: 'cascade',
        // onDelete: 'cascade',
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(15),
        unique: true,
        allowNull: false,
        validate: {
          isInt: true,
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clients');
  },
};

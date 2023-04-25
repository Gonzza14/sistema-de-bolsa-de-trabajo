'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Postulas', {
      idOferta: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        onDelete: 'RESTRICT',
        references: {
          model: 'OfertaEmpleos',
          key: 'id',
          as: 'idOferta',
        },
      },
      idSolic: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        onDelete: 'RESTRICT',
        references: {
          model: 'Solicitantes',
          key: 'id',
          as: 'idSolic',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Postulas');
  }
};
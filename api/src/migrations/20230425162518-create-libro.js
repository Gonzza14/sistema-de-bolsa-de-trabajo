'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Libros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCurriculum: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Curriculums',
          key: 'id',
          as: 'idCurriculum',
        }
      },
      nombreLibro: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      lugarLibro: {
        allowNull: true,
        type: Sequelize.STRING(80)
      },
      fechaPub: {
        allowNull: true,
        type: Sequelize.DATE
      },
      edicionLibro: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      isbn: {
        allowNull: true,
        type: Sequelize.STRING(10)
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
    await queryInterface.dropTable('Libros');
  }
};
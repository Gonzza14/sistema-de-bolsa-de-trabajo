'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Idiomas', {
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
      nombreIdioma: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      puntEscritura: {
        allowNull: false,
        type: Sequelize.STRING(2)
      },
      puntLectura: {
        allowNull: false,
        type: Sequelize.STRING(2)
      },
      puntConver: {
        allowNull: false,
        type: Sequelize.STRING(2)
      },
      puntEscucha: {
        allowNull: false,
        type: Sequelize.STRING(2)
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
    await queryInterface.dropTable('Idiomas');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ConAcademicos', {
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
      nomInstitucion: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      nombreCurso: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      periodoConAcad: {
        allowNull: false,
        type: Sequelize.STRING(80)
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
    await queryInterface.dropTable('ConAcademicos');
  }
};
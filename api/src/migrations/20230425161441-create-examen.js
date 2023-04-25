'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Examens', {
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
      idTipoEx: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        references: {
          model: 'TipoExamens',
          key: 'id',
          as: 'idTipoEx',
        }
      },
      nombreExamen: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      archivoExamen: {
        allowNull: false,
        type: Sequelize.STRING(1024)
      },
      resultadoExamen: {
        allowNull: true,
        type: Sequelize.STRING(30)
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
    await queryInterface.dropTable('Examens');
  }
};
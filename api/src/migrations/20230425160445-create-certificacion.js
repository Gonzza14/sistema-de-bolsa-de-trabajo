'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Certificacions', {
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
      nomCertificacion: {
        allowNull: false,
        type: Sequelize.STRING
      },
      codCertificacion: {
        allowNull: false,
        type: Sequelize.STRING
      },
      instiCertificacion: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fechaCertificacion: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Certificacions');
  }
};
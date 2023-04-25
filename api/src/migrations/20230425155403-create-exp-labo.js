'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ExpLabos', {
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
      puesto: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      descPuesto: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      periodoExpLabo: {
        allowNull: false,
        type: Sequelize.STRING(80)
      },
      aniostrab: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nombreOrga: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      contactoOrga: {
        allowNull: true,
        type: Sequelize.STRING(100)
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
    await queryInterface.dropTable('ExpLabos');
  }
};
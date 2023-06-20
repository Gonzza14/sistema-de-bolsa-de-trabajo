'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsuario: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model:'Usuarios',
          key: 'id',
          as: 'idUsuario',
        }
      },
      nombreEmpresa: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      telefonoEmpresa: {
        allowNull: true,
        type: Sequelize.STRING(20)
      },
      direcEmpresa: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      fotoDePerfil: {
        allowNull: true,
        type: Sequelize.STRING(1024)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        defaultValue: null,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Empresas');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OfertaEmpleos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idEmpresa: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        references: {
          model:'Empresas',
          key: 'id',
          as: 'idEmpresa',
        }
      },
      idCategoriaOfer: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        references: {
          model:'CategoriaOferta',
          key: 'id',
          as: 'idCategoriaOfer',
        }
      },
      descOferta: {
        allowNull: false,
        type: Sequelize.STRING(2048)
      },
      perfilAcademico: {
        allowNull: false,
        type: Sequelize.STRING(2048)
      },
      habilidades: {
        type: Sequelize.STRING(2048)
      },
      expLaboral: {
        allowNull: false,
        type: Sequelize.STRING(2048)
      },
      rangoSalar: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      ubicacion: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      modalidad: {
        allowNull: false,
        type: Sequelize.STRING(15)
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
    await queryInterface.dropTable('OfertaEmpleos');
  }
};
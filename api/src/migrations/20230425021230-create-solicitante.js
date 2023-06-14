'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Solicitantes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGenero: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        references: {
          model:'Generos',
          key: 'id',
          as: 'idGenero',
        }
      },
      idUsuario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model:'Usuarios',
          key: 'id',
          as: 'idUsuario',
        }
      },
      nombresSolic: {
        allowNull: true,
        type: Sequelize.STRING(80)
      },
      apellidosSolic: {
        allowNull: true,
        type: Sequelize.STRING(80)
      },
      fechaNacimiento: {
        allowNull: true,
        type: Sequelize.DATE
      },
      dui: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING(10)
      },
      pasaporte: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING(15)
      },
      nit: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING(15)
      },
      nup: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING(20)
      },
      direcSolic: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      telefonoSolic: {
        allowNull: true,
        type: Sequelize.STRING(12)
      },
      facebook: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      twitter: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      linkedin: {
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
    await queryInterface.dropTable('Solicitantes');
  }
};
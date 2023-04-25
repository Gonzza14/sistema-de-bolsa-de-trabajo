"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("RolPermisos", {
      idRol: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        onDelete: 'RESTRICT',
        references: {
          model: 'Rols',
          key: 'id',
          as: 'idRol',
        },
      },
      idPermiso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        onDelete: 'RESTRICT',
        references: {
          model: 'Permisos',
          key: 'id',
          as: 'idPermiso',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("RolPermisos");
  },
};

module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('RolPermisos', [
        { idRol: 1, idPermiso: 1, createdAt: new Date(), updatedAt: new Date() },
        { idRol: 2, idPermiso: 3, createdAt: new Date(), updatedAt: new Date() },
        { idRol: 3, idPermiso: 2, createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('RolPermisos', null, {});
    }
};
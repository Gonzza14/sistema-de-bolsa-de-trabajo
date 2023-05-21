module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('Permisos', [
        { nombrePermiso: 'Acceso total', createdAt: new Date(), updatedAt: new Date() },
        { nombrePermiso: 'Acceso empresarial', createdAt: new Date(), updatedAt: new Date() },
        { nombrePermiso: 'Acceso solicitante', createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('Permisos', null, {});
    }
};
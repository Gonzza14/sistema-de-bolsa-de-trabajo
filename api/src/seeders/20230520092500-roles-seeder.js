module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('Rols', [
        { nombreRol: 'administrador', createdAt: new Date(), updatedAt: new Date() },
        { nombreRol: 'solicitante', createdAt: new Date(), updatedAt: new Date()},
        { nombreRol: 'empresa', createdAt: new Date(), updatedAt: new Date()}
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('Rols', null, {});
    }
};
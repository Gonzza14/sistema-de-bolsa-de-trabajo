module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('Generos', [
        { nombreGenero: 'Masculino', createdAt: new Date(), updatedAt: new Date() },
        { nombreGenero: 'Femenino', createdAt: new Date(), updatedAt: new Date() },
        { nombreGenero: 'Otro', createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('Generos', null, {});
    }
};
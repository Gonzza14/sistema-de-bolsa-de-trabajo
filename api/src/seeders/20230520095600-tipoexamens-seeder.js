module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('TipoExamens', [
        { nombreTipoExamen: 'Examen de conocimientos', createdAt: new Date(), updatedAt: new Date() },
        { nombreTipoExamen: 'Prueba Psicológica', createdAt: new Date(), updatedAt: new Date() },
        { nombreTipoExamen: 'Prueba de Actitudes', createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('TipoExamens', null, {});
    }
};
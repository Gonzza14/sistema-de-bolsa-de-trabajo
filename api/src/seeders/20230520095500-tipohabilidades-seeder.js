module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('TipoHabilidads', [
        { nombreTipoHabilidad: 'Habilidad Física', createdAt: new Date(), updatedAt: new Date() },
        { nombreTipoHabilidad: 'Habilidad Social', createdAt: new Date(), updatedAt: new Date() },
        { nombreTipoHabilidad: 'Habilidad Emocional', createdAt: new Date(), updatedAt: new Date() },
        { nombreTipoHabilidad: 'Habilidad Artística', createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('TipoHabilidads', null, {});
    }
};
module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('CategoriaOferta', [
        { categoriaOfer: 'Informática', createdAt: new Date(), updatedAt: new Date() },
        { categoriaOfer: 'Recursos Humanos', createdAt: new Date(), updatedAt: new Date() },
        { categoriaOfer: 'Mercadeo', createdAt: new Date(), updatedAt: new Date() },
        { categoriaOfer: 'Finanzas', createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('CategoriaOferta', null, {});
    }
};
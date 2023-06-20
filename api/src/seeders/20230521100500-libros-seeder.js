module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('Libros', [
        { idCurriculum: 1, nombreLibro: 'Un relax en la vida', lugarLibro: 'San Salvador', fechaPub: '2021-10-14 18:00:00.000 -0600', edicionLibro: 'decima edicion', isbn: '12345678', createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('Libros', null, {});
    }
};

module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('ExpLabos', [
        { idCurriculum: 1, puesto: 'Analista Programador', descPuesto: 'Encargado de realizar sistemas utilizando Java y Angular', periodoExpLabo: 'Enero 2018- Enero 2020', aniostrab: 2, nombreOrga: 'Siman', contactoOrga: 'N/A', createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('ExpLabos', null, {});
    }
};
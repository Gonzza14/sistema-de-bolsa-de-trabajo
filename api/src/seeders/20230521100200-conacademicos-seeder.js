module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('ConAcademicos', [
        { idCurriculum: 1, nomInstitucion: 'Universidad de El Salvador', nombreCurso: 'Ingenieria de Sistemas Informaticos', periodoConAcad: '2010-2015', createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('ConAcademicos', null, {});
    }
};
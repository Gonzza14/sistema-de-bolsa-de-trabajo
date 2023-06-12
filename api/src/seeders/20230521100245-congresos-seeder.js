module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('Congresos', [
        { idCurriculum: 1, lugarCongreso: 'Universidad de El Salvador', paisCongreso: 'El Salvador', antiCongreso: 'Congreso', fechaCongreso: '10/10/2020', createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('Congresos', null, {});
    }
};
module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('Empresas', [
        { idUsuario: 3, nombreEmpresa: 'Laboratorios Lopez', telefonoEmpresa:'+503 22202020', direcEmpresa: 'San Salvador, El Salvador', createdAt: new Date(), updatedAt: new Date() },
        { idUsuario: 3, nombreEmpresa: 'Tigo El Salvador', telefonoEmpresa:'+503 21212220', direcEmpresa: 'La Libertad, El Salvador', createdAt: new Date(), updatedAt: new Date() },
        { idUsuario: 3, nombreEmpresa: 'Davivienda', telefonoEmpresa:'+503 20110110', direcEmpresa: 'San Salvador, El Salvador', createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('Empresas', null, {});
    }
};
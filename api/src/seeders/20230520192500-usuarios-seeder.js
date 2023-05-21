const bcrypt = require("bcryptjs")
module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      const rondas = 10;
      const passEncriptada = await bcrypt.hash('12345', rondas);
      return queryInterface.bulkInsert('Usuarios', [
        { idRol: 1, correoUsuario: 'solicitante1@gmail.com', contrasena: passEncriptada, createdAt: new Date(), updatedAt: new Date() },
        { idRol: 2, correoUsuario: 'admin1@gmail.com', contrasena: passEncriptada, createdAt: new Date(), updatedAt: new Date()},
        { idRol: 3, correoUsuario: 'empresa1@gmail.com', contrasena: passEncriptada, createdAt: new Date(), updatedAt: new Date()},
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('Usuarios', null, {});
    }
};
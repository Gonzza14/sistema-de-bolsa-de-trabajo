module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('Solicitantes', [
        { idGenero: 1, idUsuario: 1, nombresSolic: 'Antonio Alejandro', apellidosSolic: 'Banderas Trujillo', fechaNacimiento: '13/05/1999', dui: '010101201', pasaporte: '12345221323', nit: '0202-0452-2323', nup: '212312323213213', direcSolic: 'San Salvador, El Salvador', telefonoSolic: '75747392', facebook: 'solicitante1', twitter: 'solic12316', linkedin: 'user1232', createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('Solicitantes', null, {});
    }
};
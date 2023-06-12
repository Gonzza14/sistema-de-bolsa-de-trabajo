module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Aquí puedes definir los datos que deseas insertar utilizando el método 'bulkInsert' de 'queryInterface'
      return queryInterface.bulkInsert('Certificacions', [
        { idCurriculum: 1, nomCertificacion: 'Oracle Certification', codCertificacion: 'ora-1234', instiCertificacion: 'Oracle Institute', fechaCertificacion: "10/10/2015",createdAt: new Date(), updatedAt: new Date() },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      // Aquí puedes definir cómo deshacer la inserción utilizando el método 'bulkDelete' de 'queryInterface'
      return queryInterface.bulkDelete('Certificacions', null, {});
    }
};
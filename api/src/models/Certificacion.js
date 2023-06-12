'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certificacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Certificacion.belongsTo(models.Curriculum, {
        foreignKey: "idCurriculum",
        targetKey: "id",
        onDelete: 'CASCADE'
      });
    }
  }
  Certificacion.init({
    idCurriculum: DataTypes.INTEGER,
    nomCertificacion: DataTypes.STRING(100),
    codCertificacion: DataTypes.STRING(20),
    instiCertificacion: DataTypes.STRING(100),
    fechaCertificacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Certificacion',
  });
  return Certificacion;
};
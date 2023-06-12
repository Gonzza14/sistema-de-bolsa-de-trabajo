'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Examen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Examen.belongsTo(models.Curriculum, {
        foreignKey: "idCurriculum",
        targetKey: "id",
        onDelete: 'CASCADE'
      });
      models.Examen.belongsTo(models.TipoExamen, {
        foreignKey: "idTipoEx",
        targetKey: "id",
        onDelete: 'RESTRICT'
      });
    }
  }
  Examen.init({
    idCurriculum: DataTypes.INTEGER,
    idTipoEx: DataTypes.INTEGER,
    nombreExamen: DataTypes.STRING(100),
    archivoExamen: DataTypes.STRING(1024),
    resultadoExamen: DataTypes.STRING(30)
  }, {
    sequelize,
    modelName: 'Examen',
  });
  return Examen;
};
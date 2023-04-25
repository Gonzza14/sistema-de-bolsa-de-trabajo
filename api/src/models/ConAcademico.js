'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConAcademico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ConAcademico.belongsTo(models.Curriculum, {
        foreignKey: "idCurriculum",
        targetKey: "id",
        onDelete: 'CASCADE'
      });
    }
  }
  ConAcademico.init({
    idCurriculum: DataTypes.INTEGER,
    nomInstitucion: DataTypes.STRING(100),
    nombreCurso: DataTypes.STRING(100),
    periodoConAcad: DataTypes.STRING(80)
  }, {
    sequelize,
    modelName: 'ConAcademico',
  });
  return ConAcademico;
};
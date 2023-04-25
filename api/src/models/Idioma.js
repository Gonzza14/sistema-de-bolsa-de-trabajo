'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Idioma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Idioma.belongsTo(models.Curriculum, {
        foreignKey: "idCurriculum",
        targetKey: "id",
        onDelete: 'CASCADE'
      });
    }
  }
  Idioma.init({
    idCurriculum: DataTypes.INTEGER,
    nombreIdioma: DataTypes.STRING(50),
    puntEscritura: DataTypes.STRING(2),
    puntLectura: DataTypes.STRING(2),
    puntConver: DataTypes.STRING(2),
    puntEscucha: DataTypes.STRING(2)
  }, {
    sequelize,
    modelName: 'Idioma',
  });
  return Idioma;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curriculum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Curriculum.belongsTo(models.Solicitante, {
        foreignKey: "idSolic", 
        targetKey: "id", 
        onDelete: 'CASCADE' 
      });
      models.Curriculum.hasMany(models.ExpLabo, {
        foreignKey: "idCurriculum",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
      models.Curriculum.hasMany(models.ConAcademico, {
        foreignKey: "idCurriculum",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
      models.Curriculum.hasMany(models.Certificacion, {
        foreignKey: "idCurriculum",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
      models.Curriculum.hasMany(models.Congreso, {
        foreignKey: "idCurriculum",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
      models.Curriculum.hasMany(models.Examen, {
        foreignKey: "idCurriculum",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
      models.Curriculum.hasMany(models.HabilidadTecnica, {
        foreignKey: "idCurriculum",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
      models.Curriculum.hasMany(models.Idioma, {
        foreignKey: "idCurriculum",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
      models.Curriculum.hasMany(models.Libro, {
        foreignKey: "idCurriculum",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
      models.Curriculum.hasMany(models.Logro, {
        foreignKey: "idCurriculum",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
      models.Curriculum.hasMany(models.RecomLabor, {
        foreignKey: "idCurriculum",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
      models.Curriculum.hasMany(models.RecomPers, {
        foreignKey: "idCurriculum",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
    }
  }
  Curriculum.init({
    idSolic: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curriculum',
  });
  return Curriculum;
};
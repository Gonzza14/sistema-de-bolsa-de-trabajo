'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HabilidadTecnica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.HabilidadTecnica.belongsTo(models.Curriculum, {
        foreignKey: "idCurriculum",
        targetKey: "id",
        onDelete: 'CASCADE'
      });
      models.HabilidadTecnica.belongsTo(models.TipoHabilidad, {
        foreignKey: "idTipoHab",
        targetKey: "id",
        onDelete: 'RESTRICT'
      });
    }
  }
  HabilidadTecnica.init({
    idCurriculum: DataTypes.INTEGER,
    idTipoHab: DataTypes.INTEGER,
    habTec: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'HabilidadTecnica',
  });
  return HabilidadTecnica;
};
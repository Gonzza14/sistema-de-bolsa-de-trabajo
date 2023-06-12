'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoHabilidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.TipoHabilidad.hasMany(models.HabilidadTecnica, {
        foreignKey: "idTipoHab",
        sourceKey: "id",
        onDelete: 'RESTRICT'
      });
    }
  }
  TipoHabilidad.init({
    nombreTipoHabilidad: DataTypes.STRING(100)
  }, {
    sequelize,
    paranoid: true,
    modelName: 'TipoHabilidad',
  });
  return TipoHabilidad;
};
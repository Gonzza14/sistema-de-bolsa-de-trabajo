'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoriaOferta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.CategoriaOferta.hasMany(models.OfertaEmpleo, {
        foreignKey: "idCategoriaOfer",
        sourceKey: "id",
      });
    }
  }
  CategoriaOferta.init({
    categoriaOfer: DataTypes.STRING(50)
  }, {
    sequelize,
    paranoid: true,
    modelName: 'CategoriaOferta',
  });
  return CategoriaOferta;
};
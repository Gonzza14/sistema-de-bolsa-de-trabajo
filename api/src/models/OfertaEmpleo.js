'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OfertaEmpleo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.OfertaEmpleo.belongsTo(models.CategoriaOferta, {
        foreignKey: "idCategoriaOfer", 
        targetKey: "id", 
        onDelete: 'RESTRICT' 
      });
      models.OfertaEmpleo.belongsTo(models.Empresa, {
        foreignKey: "idEmpresa", 
        targetKey: "id", 
        onDelete: 'RESTRICT' 
      });
      models.OfertaEmpleo.belongsToMany(models.Solicitante, { 
        through: 'Postula',
        foreignKey: 'idOferta',
        otherKey: 'idSolic'
      });
    }
  }
  OfertaEmpleo.init({
    idEmpresa: DataTypes.INTEGER,
    idCategoriaOfer: DataTypes.INTEGER,
    tituloOferta: DataTypes.STRING(50),
    fechaExpiracion: DataTypes.DATE,
    descOferta: DataTypes.STRING(2048),
    perfilAcademico: DataTypes.STRING(2048),
    habilidades: DataTypes.STRING(2048),
    expLaboral: DataTypes.STRING(2048),
    rangoSalar: DataTypes.STRING(255),
    ubicacion: DataTypes.STRING(255),
    modalidad: DataTypes.STRING(15),
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'OfertaEmpleo',
  });
  return OfertaEmpleo;
};
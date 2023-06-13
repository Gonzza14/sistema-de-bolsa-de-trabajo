'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Solicitante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Solicitante.belongsTo(models.Genero, {
        foreignKey: "idGenero", 
        targetKey: "id", 
        onDelete: 'RESTRICT' 
      });
      models.Solicitante.belongsTo(models.Usuario, {
        foreignKey: "idUsuario", 
        targetKey: "id", 
        onDelete: 'CASCADE' 
      });
      models.Solicitante.belongsToMany(models.OfertaEmpleo, { 
        through: 'Postula',
        foreignKey: 'idSolic',
        otherKey: 'idOferta'
      });
      models.Solicitante.hasOne(models.Curriculum, {
        foreignKey: "idSolic",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
    }
  }
  Solicitante.init({
    idGenero: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER,
    nombresSolic: DataTypes.STRING(80),
    apellidosSolic: DataTypes.STRING(80),
    fechaNacimiento: DataTypes.DATE,
    dui: DataTypes.STRING(10),
    pasaporte: DataTypes.STRING(15),
    nit: DataTypes.STRING(15),
    nup: DataTypes.STRING(20),
    direcSolic: DataTypes.STRING(255),
    telefonoSolic: DataTypes.STRING(12),
    facebook: DataTypes.STRING(255),
    twitter: DataTypes.STRING(255),
    linkedin: DataTypes.STRING(255),
    fotoDePerfil: DataTypes.STRING(1024),
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Solicitante',
  });
  return Solicitante;
};
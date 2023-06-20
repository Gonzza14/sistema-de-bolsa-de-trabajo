"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Relacion 1:1
      models.Empresa.belongsTo(models.Usuario, {
        foreignKey: "idUsuario", 
        targetKey: "id", 
        onDelete: 'CASCADE' 
      });
      models.Empresa.hasMany(models.OfertaEmpleo, {
        foreignKey: "idEmpresa",
        sourceKey: "id",
      });
    }
  }
  Empresa.init(
    {
      idUsuario: DataTypes.INTEGER,
      nombreEmpresa: DataTypes.STRING(100),
      telefonoEmpresa: DataTypes.STRING(12),
      direcEmpresa: DataTypes.STRING(255),
      fotoDePerfil: DataTypes.STRING(1024),
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Empresa",
    }
  );
  return Empresa;
};

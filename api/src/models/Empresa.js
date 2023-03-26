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
      //Relacion 1:N
      models.Empresa.hasMany(models.Perfil, {
        foreignKey: "IdEmpresa",
        sourceKey: "id",
      });
    }
  }
  Empresa.init(
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      estado: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Empresa",
    }
  );
  return Empresa;
};

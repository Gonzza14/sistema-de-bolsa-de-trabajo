'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Perfil.belongsTo(models.Empresa, { 
        foreignKey: "idEmpresa", targetKey: "id", onDelete: 'RESTRICT' 
      });
    }
  }
  Perfil.init({
    descripcion: DataTypes.STRING,
    idEmpresa: DataTypes.INTEGER,
    estado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Perfil',
  });
  return Perfil;
};
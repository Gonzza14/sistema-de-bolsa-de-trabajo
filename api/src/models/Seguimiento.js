'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seguimiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seguimiento.init({
    idOferta: DataTypes.INTEGER,
    idEmpresa: DataTypes.INTEGER,
    idSolic: DataTypes.INTEGER,
    contenido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seguimiento',
  });
  return Seguimiento;
};
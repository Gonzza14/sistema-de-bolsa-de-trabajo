'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permiso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        models.Permiso.belongsToMany(models.Rol, { 
          through: 'RolPermiso',
          foreignKey: 'idPermiso',
          otherKey: 'idRol'
        });
    }
  }
  Permiso.init({
    nombrePermiso: DataTypes.STRING(50)
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Permiso',
  });
  return Permiso;
};
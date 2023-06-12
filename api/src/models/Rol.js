'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Rol.belongsToMany(models.Permiso, { 
        through: 'RolPermiso',
        foreignKey: 'idRol',
        otherKey: 'idPermiso'
      });
      models.Rol.hasMany(models.Usuario, {
        foreignKey: "idRol",
        sourceKey: "id",
      });
    }
  }
  Rol.init({
    nombreRol: DataTypes.STRING(50)
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Rol',
  });
  
  return Rol;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolPermiso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.RolPermiso.belongsTo(models.Rol, { foreignKey: 'id' });
      models.RolPermiso.belongsTo(models.Permiso, { foreignKey: 'id' });
    }
  }
  RolPermiso.init({
    idRol: DataTypes.INTEGER,
    idPermiso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RolPermiso',
  });
  return RolPermiso;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Usuario.belongsTo(models.Rol, { 
        foreignKey: "idRol", 
        targetKey: "id",
        onDelete: 'RESTRICT' 
      });
      models.Usuario.hasOne(models.Empresa, {
        foreignKey: "idUsuario",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
      models.Usuario.hasOne(models.Solicitante, {
        foreignKey: "idUsuario",
        sourceKey: "id",
        onDelete: 'CASCADE'
      });
    }
  }
  Usuario.init({
    idRol: DataTypes.INTEGER,
    correoUsuario: DataTypes.STRING(100),
    contrasena: DataTypes.STRING(500)
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Usuario',
  });
  return Usuario;
};
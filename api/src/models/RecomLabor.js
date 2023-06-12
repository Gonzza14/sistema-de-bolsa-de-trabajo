'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecomLabor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.RecomLabor.belongsTo(models.Curriculum, {
        foreignKey: "idCurriculum",
        targetKey: "id",
        onDelete: 'CASCADE'
      });
    }
  }
  RecomLabor.init({
    idCurriculum: DataTypes.INTEGER,
    nombreRecomLab: DataTypes.STRING(100),
    telefonoRecomLab: DataTypes.STRING(12),
  }, {
    sequelize,
    modelName: 'RecomLabor',
  });
  return RecomLabor;
};
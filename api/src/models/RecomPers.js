'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecomPers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.RecomPers.belongsTo(models.Curriculum, {
        foreignKey: "idCurriculum",
        targetKey: "id",
        onDelete: 'CASCADE'
      });
    }
  }
  RecomPers.init({
    idCurriculum: DataTypes.INTEGER,
    nombreRecomPers: DataTypes.STRING(100),
    telefonoRecomPers: DataTypes.STRING(12)
  }, {
    sequelize,
    modelName: 'RecomPers',
  });
  return RecomPers;
};
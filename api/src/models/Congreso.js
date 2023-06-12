'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Congreso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Congreso.belongsTo(models.Curriculum, {
        foreignKey: "idCurriculum",
        targetKey: "id",
        onDelete: 'CASCADE'
      });
    }
  }
  Congreso.init({
    idCurriculum: DataTypes.INTEGER,
    lugarCongreso: DataTypes.STRING(100),
    paisCongreso: DataTypes.STRING(50),
    antiCongreso: DataTypes.STRING(100),
    fechaCongreso: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Congreso',
  });
  return Congreso;
};
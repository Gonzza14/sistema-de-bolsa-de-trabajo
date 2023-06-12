'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExpLabo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ExpLabo.belongsTo(models.Curriculum, {
        foreignKey: "idCurriculum",
        targetKey: "id",
        onDelete: 'CASCADE'
      });
    }
  }
  ExpLabo.init({
    idCurriculum: DataTypes.INTEGER,
    puesto: DataTypes.STRING(50),
    descPuesto: DataTypes.STRING(255),
    periodoExpLabo: DataTypes.STRING(80),
    aniostrab: DataTypes.INTEGER,
    nombreOrga: DataTypes.STRING(100),
    contactoOrga: DataTypes.STRING(100)
  }, {
    sequelize,
    modelName: 'ExpLabo',
  });
  return ExpLabo;
};
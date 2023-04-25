'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Logro.belongsTo(models.Curriculum, {
        foreignKey: "idCurriculum",
        targetKey: "id",
        onDelete: 'CASCADE'
      });
    }
  }
  Logro.init({
    idCurriculum: DataTypes.INTEGER,
    logroRealizado: DataTypes.STRING(255),
    fechaLogro: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Logro',
  });
  return Logro;
};
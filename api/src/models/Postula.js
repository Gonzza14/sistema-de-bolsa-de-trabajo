'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Postula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Postula.belongsTo(models.OfertaEmpleo, { foreignKey: 'id' });
      models.Postula.belongsTo(models.Solicitante, { foreignKey: 'id' });
    }
  }
  Postula.init({
    idOferta: DataTypes.INTEGER,
    idSolic: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Postula',
  });
  return Postula;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Libro.belongsTo(models.Curriculum, {
        foreignKey: "idCurriculum",
        targetKey: "id",
        onDelete: 'CASCADE'
      });
    }
  }
  Libro.init({
    idCurriculum: DataTypes.INTEGER,
    nombreLibro: DataTypes.STRING(100),
    lugarLibro: DataTypes.STRING(80),
    fechaPub: DataTypes.DATE,
    edicionLibro: DataTypes.STRING(50),
    isbn: DataTypes.STRING(10)
  }, {
    sequelize,
    modelName: 'Libro',
  });
  return Libro;
};
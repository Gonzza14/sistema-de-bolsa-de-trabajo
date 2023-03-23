//Importar sequelize y dataTypes
import { DataTypes } from "sequelize";
import { sequelize } from "../database";

//Definir esquema de la tabla
export const Perfil = sequelize.define("perfiles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
});



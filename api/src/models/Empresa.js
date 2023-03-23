//Importar sequelize y dataTypes
import { DataTypes } from "sequelize";
import { sequelize } from "../database";
import { Perfil } from "./Perfil";

//Definir esquema de la tabla
export const Empresa = sequelize.define("empresas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
});

//Relacion 1:N
Empresa.hasMany(Perfil, { foreignKey: "id_empresa", sourceKey: "id" });
Perfil.belongsTo(Empresa, { foreignKey: "id_empresa", targetKey: "id" });

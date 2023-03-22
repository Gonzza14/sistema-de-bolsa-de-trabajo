//Importar config desde el modulo dotenv
import { config } from "dotenv";

//Se ejecuta para cargar las variables de entorno
config();

//Crear la cadena de conexion
const connectionString = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

//Exportar las variables de entorno
export default {
  pgURI: connectionString,
};

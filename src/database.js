//Importar client desde el modulo de postgreSQL
import { Pool } from "pg";

//Importar la configuracion para cargar las variables de entorno
import config from "./config";

//Traer la cadena de conexion
const connectionString = config.pgURI;

//Crear el pool de conexiones
const pool = new Pool({
  connectionString,
});

//Conectar a base de datos
(async () => {
  try {
    const db = await pool.connect();
    console.log(`Conectado a la base de datos: ${db.database}`,);
  } catch (error) {
    console.error(error);
  }
})();

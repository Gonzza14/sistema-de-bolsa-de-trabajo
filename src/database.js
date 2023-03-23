//Importar client desde el modulo de postgreSQL
import { Pool } from "pg";

//Importar la configuracion para cargar las variables de entorno
import config from "./config";

//Importar el ORM sequelize
import Sequelize from "sequelize";

//Crear la instancia de sequelize
export const sequelize = new Sequelize(
  config.pgDatabase,
  config.pgUser,
  config.pgPassword,
  {
    host: config.pgHost,
    dialect: "postgres",
  }
);

//Traer la cadena de conexion
//const connectionString = config.pgURI;

//Crear el pool de conexiones
/*const pool = new Pool({
  connectionString,
});*/

//Conectar a base de datos
(async () => {
  try {
    /*const db = await pool.connect();
    console.log(`Conectado a la base de datos: ${db.database}`);*/
    
    //Sincronizar los modelos con la base de datos
    await sequelize.sync();
    console.log(`Conectado a la base de datos`);
  } catch (error) {
    console.error(`No se puede conectar a la base de datos: ${error}`);
  }
})();

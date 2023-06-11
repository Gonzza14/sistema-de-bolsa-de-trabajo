//Importar configuracion del servidor
import app from "./app";

//Importar conexion de base de datos
//import "./database";

//Puerto de escucha del servidor y arranca la apliacion
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));

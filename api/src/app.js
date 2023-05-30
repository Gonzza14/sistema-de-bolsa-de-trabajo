//Importaciones de modulos
import express from "express";
import morgan from "morgan";
import cors from "cors";

//Importaciones de rutas
import empresasRoutes from "./routes/empresas.routes";
import usuariosRoutes from "./routes/usuarios.routes";
import rolesRoutes from "./routes/roles.routes";
import tipohabilidadesRoutes from "./routes/tipohabilidades.routes";
import postulaRoutes from "./routes/postula.routes";
import ofertaRoutes from "./routes/ofertaEmpleo.routes";
import categoriaRoutes from "./routes/categorias.routes";
import solicitanteRoutes from "./routes/solicitantes.routes";

//Creacion de aplicacion
const app = express();

//----------------------------------------[Configuraciones]------------------------------------
//Configuracion del puerto|Si no existe un puerto definido en el sistema, se usa el puerto 3000
app.set("port", process.env.PORT || 3000);

//Middlewares
//Permite ver las peticiones que se hacen al servidor en la consola
app.use(morgan("dev"));

//Permite que el servidor pueda recibir y enviar datos en formato json
app.use(express.json());

//Permite que el servidor pueda recibir y enviar datos desde un formulario
app.use(cors());

//Entender los datos que vienen desde un formulario
app.use(express.urlencoded({ extended: false }));

//----------------------------------------[Rutas]-----------------------------------------------
app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la API del Sistema de Bolsa de Trabajo" });
});

app.use("/api/empresas", empresasRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/roles", rolesRoutes);
app.use("/api/tipohabilidades", tipohabilidadesRoutes);
app.use("/api/postula", postulaRoutes);
app.use("/api/ofertas", ofertaRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/solicitantes", solicitanteRoutes);

export default app;

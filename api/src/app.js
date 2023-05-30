//Importaciones de modulos
import express from "express";
import morgan from "morgan";
import cors from "cors";

//Importaciones de rutas
import empresasRoutes from "./routes/empresas.routes";
import usuariosRoutes from "./routes/usuarios.routes";
import rolesRoutes from "./routes/roles.routes";
import tipohabilidadesRoutes from "./routes/tipohabilidades.routes";
import postulacionesRoutes from "./routes/postulaciones.routes";
import curriculumRoutes from "./routes/curriculum.routes";
import conAcademicosRoutes from "./routes/conAcademicos.routes";
import expLaboRoutes from "./routes/expLabo.routes";
import habilidadTecRoutes from "./routes/habilidadTecnica.routes";
import idiomaRoutes from './routes/idiomas.routes';
import libroRoutes from './routes/libros.routes';
import certiRoutes from './routes/certificaciones.routes';
import congresoRoutes from './routes/congresos.routes';
import logroRoutes from './routes/logros.routes';
import recomLaboRoutes from './routes/recomLabors.routes';
import recomPersRoutes from './routes/recomPers.routes';
import tipoExamenesRoutes from './routes/tipoExamenes.routes';
import examenesRoutes from './routes/examenes.routes';
import fs from 'fs';

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
app.use("/api/postulaciones", postulacionesRoutes); 

//Curriculum
app.use("/api/curriculum", curriculumRoutes);
//Conocimientos academicos
app.use("/api/conAcademicos", conAcademicosRoutes);
//Experiencia laboral
app.use("/api/expLabos", expLaboRoutes);
//HAbilidades tecnicas
app.use("/api/habilidadTecnica", habilidadTecRoutes);
//Idiomas
app.use("/api/idioma", idiomaRoutes);

app.use("/api/libro", libroRoutes);

app.use("/api/certificacion", certiRoutes);

app.use("/api/congreso", congresoRoutes);

app.use("/api/logro", logroRoutes);

app.use("/api/recomLabo", recomLaboRoutes);

app.use("/api/recomPers", recomPersRoutes);

app.use("/api/tipoExamenes", tipoExamenesRoutes);

app.use("/api/examenes", examenesRoutes);

app.get('/images/:imageName', (req, res) => {
  // Get the image name from the request
  const imageName = req.params.imageName;

  // Load the image from the file system
  const image = fs.readFileSync(`uploads/${imageName}`);

  // Return the image to the client
  res.send(image);
});


export default app;

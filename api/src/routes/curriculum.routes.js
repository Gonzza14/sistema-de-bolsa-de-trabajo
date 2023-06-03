//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
	createCurriculum,
  getCurriculumExists,
} from "../controllers/curriculum.controller";

//Creamos una instancia del router
const router = new Router();

//Definimos las rutas
router.post("/:id", createCurriculum);
router.get("/:id", getCurriculumExists);

//Exportamos el router
export default router;

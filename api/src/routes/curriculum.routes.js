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
// router.get("/", getConAcademicos);
router.post("/", createCurriculum);
// router.put("/:id", updateConAcademico);
// router.delete("/:id", deleteConAcademico);
router.get("/", getCurriculumExists);
//router.get("/:id/:perfiles", getPerfilesPorConAcademico);

//Exportamos el router
export default router;

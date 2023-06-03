//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
  createConAcademico,
  deleteConAcademico,
  getConAcademico,
  getConAcademicos,
  updateConAcademico,
} from "../controllers/conAcademicos.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/:idCurriculum", getConAcademicos);
router.post("/:idCurriculum", createConAcademico);
router.put("/:idCurriculum/:id", updateConAcademico);
router.delete("/:idCurriculum/:id", deleteConAcademico);
//router.get("/:id/:perfiles", getPerfilesPorConAcademico);

//Exportamos el router
export default router;

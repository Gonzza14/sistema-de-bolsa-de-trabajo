//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
  createExpLabo,
  deleteExpoLabo,
  getExpLabos,
	updateExpoLabo,
} from "../controllers/expLabo.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/:idCurriculum", getExpLabos);
router.post("/:idCurriculum", createExpLabo);
router.put("/:idCurriculum/:id", updateExpoLabo);
router.delete("/:idCurriculum/:id", deleteExpoLabo);
//router.get("/:id/:perfiles", getPerfilesPorExpLcreateExpLabo);

//Exportamos el router
export default router;

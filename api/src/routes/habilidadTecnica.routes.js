//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
  createHabilidadTecnica,
  deleteHabilidadTecnica,
	getHabilidadTecnicas,
	updateHabilidadTecnica,
} from "../controllers/habilidadTecnica.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/:idCurriculum", getHabilidadTecnicas);
router.post("/:idCurriculum", createHabilidadTecnica);
router.put("/:idCurriculum/:id", updateHabilidadTecnica);
router.delete("/:idCurriculum/:id", deleteHabilidadTecnica);
//router.get("/:id/:perfiles", getPerfilesPorExpLcreateExpLabo);

//Exportamos el router
export default router;

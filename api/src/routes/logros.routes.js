//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import { createLogro, deleteLogro, getLogros, updateLogro } from "../controllers/logros.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/:idCurriculum", getLogros);
router.post("/:idCurriculum", createLogro);
router.put("/:idCurriculum/:id", updateLogro);
router.delete("/:idCurriculum/:id", deleteLogro);
//router.get("/:id/:perfiles", getPerfilesPorExpLcreateExpLabo);

//Exportamos el router
export default router;

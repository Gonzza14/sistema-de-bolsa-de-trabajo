//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import { createCongreso, deleteCongreso, getCongresos, updateCongreso } from "../controllers/congresos.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/:idCurriculum", getCongresos);
router.post("/:idCurriculum", createCongreso);
router.put("/:idCurriculum/:id", updateCongreso);
router.delete("/:idCurriculum/:id", deleteCongreso);
//router.get("/:id/:perfiles", getPerfilesPorExpLcreateExpLabo);

//Exportamos el router
export default router;

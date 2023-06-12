//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import { createRecomLabor, deleteRecomLabor, getRecomLabors, updateRecomLabor } from "../controllers/recomLabors.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/:idCurriculum", getRecomLabors);
router.post("/:idCurriculum", createRecomLabor);
router.put("/:idCurriculum/:id", updateRecomLabor);
router.delete("/:idCurriculum/:id", deleteRecomLabor);
//router.get("/:id/:perfiles", getPerfilesPorExpLcreateExpLabo);

//Exportamos el router
export default router;

//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import { createRecomPers, deleteRecomPers, getRecomPerss, updateRecomPers } from "../controllers/recomPers.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/:idCurriculum", getRecomPerss);
router.post("/:idCurriculum", createRecomPers);
router.put("/:idCurriculum/:id", updateRecomPers);
router.delete("/:idCurriculum/:id", deleteRecomPers);
//router.get("/:id/:perfiles", getPerfilesPorExpLcreateExpLabo);

//Exportamos el router
export default router;

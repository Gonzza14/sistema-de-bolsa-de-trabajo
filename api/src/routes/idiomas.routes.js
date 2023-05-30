//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import { createIdioma, deleteIdioma, getIdiomas, updateIdioma } from "../controllers/idiomas.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/:idCurriculum", getIdiomas);
router.post("/:idCurriculum", createIdioma);
router.put("/:idCurriculum/:id", updateIdioma);
router.delete("/:idCurriculum/:id", deleteIdioma);
//router.get("/:id/:perfiles", getPerfilesPorExpLcreateExpLabo);

//Exportamos el router
export default router;

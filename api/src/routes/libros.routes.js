//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import { createLibro, deleteLibro, getLibros,  updateLibro } from "../controllers/libros.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/:idCurriculum", getLibros);
router.post("/:idCurriculum", createLibro);
router.put("/:idCurriculum/:id", updateLibro);
router.delete("/:idCurriculum/:id", deleteLibro);
//router.get("/:id/:perfiles", getPerfilesPorExpLcreateExpLabo);

//Exportamos el router
export default router;

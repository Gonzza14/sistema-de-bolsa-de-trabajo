//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
  createGenero,
  deleteGenero,
  getGenero,
  getGeneros,
  updateGenero,
} from "../controllers/generos.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/", getGeneros);
router.post("/", createGenero);
router.put("/:id", updateGenero);
router.delete("/:id", deleteGenero);
router.get("/:id", getGenero);
//router.get("/:id/:perfiles", getPerfilesPorGenero);

//Exportamos el router
export default router;


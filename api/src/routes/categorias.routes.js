//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
  createCategoria,
  deleteCategoria,
  getCategoria,
  getCategorias,
  updateCategoria,
} from "../controllers/categorias.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/", getCategorias);
router.post("/", createCategoria);
router.put("/:id", updateCategoria);
router.delete("/:id", deleteCategoria);
router.get("/:id", getCategoria);
//router.get("/:id/:perfiles", getPerfilesPorCategoria);

//Exportamos el router
export default router;

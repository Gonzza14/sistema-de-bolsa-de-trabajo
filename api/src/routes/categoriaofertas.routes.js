//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
  createEmpresa,
  deleteEmpresa,
  getEmpresa,
  getCategoriaOfertas,
  updateEmpresa,
} from "../controllers/categoriaoferta.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/", getCategoriaOfertas);
router.post("/", createEmpresa);
router.put("/:id", updateEmpresa);
router.delete("/:id", deleteEmpresa);
router.get("/:id", getEmpresa);
//router.get("/:id/:perfiles", getPerfilesPorEmpresa);

//Exportamos el router
export default router;

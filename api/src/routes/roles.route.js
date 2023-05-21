//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
  createRol,
  deleteRol,
  getRol,
  getERol,
  updateRol,
} from "../controllers/roles.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/", getRoles);
router.post("/", createRol);
router.put("/:id", updateRol);
router.delete("/:id", deleteRol);
router.get("/:id", getRol);
//router.get("/:id/:perfiles", getPerfilesPorEmpresa);

//Exportamos el router
export default router;
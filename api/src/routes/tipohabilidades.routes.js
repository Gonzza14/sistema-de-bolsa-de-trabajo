//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
  createTipohabilidad,
  deleteTipohabilidad,
  getTipohabilidad,
  getTiposhabilidades,
  updateTipohabilidad,
} from "../controllers/tipohabilidades.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/", getTiposhabilidades);
router.post("/", createTipohabilidad);
router.put("/:id", updateTipohabilidad);
router.delete("/:id", deleteTipohabilidad);
router.get("/:id", getTipohabilidad);

//Exportamos el router
export default router;
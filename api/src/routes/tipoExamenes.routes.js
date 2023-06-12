//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
  createTipoExamen,
  deleteTipoExamen,
  getTipoExamen,
  getTipoExamenes,
  updateTipoExamen,
} from "../controllers/tipoExamenes.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/", getTipoExamenes);
router.post("/", createTipoExamen);
router.put("/:id", updateTipoExamen);
router.delete("/:id", deleteTipoExamen);
router.get("/:id", getTipoExamen);

//Exportamos el router
export default router;
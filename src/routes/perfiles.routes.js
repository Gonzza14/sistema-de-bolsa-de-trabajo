//Importamos el router de express
import { Router } from "express";
import { getPerfiles, createPerfil, updatePerfil, deletePerfil, getPerfil } from "../controllers/perfiles.controller";
//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/perfiles", getPerfiles)
router.post("/perfiles", createPerfil)
router.put("/perfiles/:id", updatePerfil)
router.delete("/perfiles/:id", deletePerfil)
router.get("/perfiles/:id", getPerfil)

//Exportamos el router
export default router;

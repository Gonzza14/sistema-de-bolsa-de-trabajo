//Importamos el router de express
import { Router } from "express";

import { getRolPermisos, updateRolPermiso } from "../controllers/rolPermisos.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/", getRolPermisos);
router.put("/:idRol", updateRolPermiso);


// console.log(result);
export default router;
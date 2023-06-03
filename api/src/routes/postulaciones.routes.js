//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
    getPostulaciones
} from "../controllers/postulaciones.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/:id", getPostulaciones);

//Exportamos el router
export default router;
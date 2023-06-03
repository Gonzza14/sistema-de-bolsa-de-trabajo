//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
    createOferta,
    deleteOferta,
    getOferta,
    getOfertas,
    updateOferta,
} from "../controllers/ofertaEmpleo.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/", getOfertas);
router.post("/", createOferta);
router.put("/:id", updateOferta);
router.delete("/:id", deleteOferta);
router.get("/:id", getOferta);

//Exportamos el router
export default router;
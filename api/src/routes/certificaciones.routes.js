//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import { createCertificacion, deleteCertificacion, getCertificacions, updateCertificacion } from "../controllers/certificaciones.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/:idCurriculum", getCertificacions);
router.post("/:idCurriculum", createCertificacion);
router.put("/:idCurriculum/:id", updateCertificacion);
router.delete("/:idCurriculum/:id", deleteCertificacion);
//router.get("/:id/:perfiles", getPerfilesPorExpLcreateExpLabo);

//Exportamos el router
export default router;

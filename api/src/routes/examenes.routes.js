//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import { createExamen, deleteExamen, getExamens, updateExamen } from "../controllers/examenes.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/:idCurriculum", getExamens);
router.post('/:idCurriculum', upload.single('archivoExamen'), createExamen);
// router.post("/:idCurriculum", createExamen);
router.put("/:idCurriculum/:id", updateExamen);
router.delete("/:idCurriculum/:id", deleteExamen);
//router.get("/:id/:perfiles", getPerfilesPorExpLcreateExpLabo);

//Exportamos el router
export default router;

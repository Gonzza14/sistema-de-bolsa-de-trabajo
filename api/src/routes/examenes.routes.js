import { Router } from "express";
import { createExamen, deleteExamen, getExamens, updateExamen } from "../controllers/examenes.controller";
import multer from 'multer';

//Creamos una instancia del router
const router = Router();


const upload = multer({
  storage: multer.diskStorage({
    destination: "../client/dist/uploads",
    filename: (req, file, cb) => {
      // Generate a unique filename
      const filename = `${Date.now()}-${file.originalname}`;
      cb(null, filename);
    },
  }),
});

//Definimos las rutas
router.get("/:idCurriculum", getExamens);
router.post('/:idCurriculum', upload.single('archivoExamen'), createExamen);
// router.post("/:idCurriculum", createExamen);
router.put("/:idCurriculum/:id", upload.single('archivoExamen'), updateExamen);
router.delete("/:idCurriculum/:id", deleteExamen);

//router.get("/:id/:perfiles", getPerfilesPorExpLcreateExpLabo);

//Exportamos el router
export default router;

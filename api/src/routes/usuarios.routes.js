//Importamos el router de express
import { Router } from "express";

import {
    createUsuario,
    deleteUsuario,
    getSolicitante,
    getUsuario,
    getUsuarios,
    updateUsuario,
    verificarUsuario,
    updateSolicitante,
    getEmpresa,
    updateEmpresa
} from "../controllers/usuarios.controller";
//import { getEmpresa, updateEmpresa } from "../controllers/empresas.controller";

import multer from 'multer';

//Creamos una instancia del router
const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: "../client/public/perfil",
    filename: (req, file, cb) => {
      // Generate a unique filename
      const filename = `${Date.now()}-${file.originalname}`;
      cb(null, filename);
    },
  }),
});

//Definimos las rutas
router.get("/", getUsuarios);
router.post("/", createUsuario);
router.post("/verificarcuenta", verificarUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);
router.post("/:id", getUsuario);
router.get("/solicitante/:id", getSolicitante);
router.put("/solicitante/:id", upload.single('fotoDePerfil'), updateSolicitante);
router.get("/empresa/:id", getEmpresa);
router.put("/empresa/:id", updateEmpresa);

export default router;
import { Router } from "express";
import { methods as usuarioController } from "./../controllers/usuarioController";

const router = Router();

//Rutas de usuario
router.get("/", usuarioController.getusuario);

export default router; 
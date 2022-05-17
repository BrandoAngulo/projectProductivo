import { Router } from "express";
import { methods as usuarioController } from "../controllers/usuario.controller";

const router = Router();

//Rutas de usuario
router.get("/", usuarioController.getusuarios);
router.get("/:id_usuario", usuarioController.getusuario);

export default router; 
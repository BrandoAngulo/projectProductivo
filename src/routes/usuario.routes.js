import { Router } from "express";
import { methods as usuarioController } from "../controllers/usuario.controller";

const router = Router();

//Rutas de usuario
//listar 
router.get("/", usuarioController.getusuarios);
//listar un usuario
router.get("/:id_usuario", usuarioController.getusuario);
//DELETE  
router.delete("/:id_usuario", usuarioController.deleteUsuario);
//UPDATE
router.put("/:id_usuario", usuarioController.updateUsuario);

export default router; 
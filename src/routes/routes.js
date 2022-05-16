import { Router } from "express";
import { methods as controller } from "../controllers/controller";

const router = Router();

//rutas 
// ruta para obtener peticiones con get
router.get("/", controller.getpedidos);
//ruta para obtener la peticion recibiendo parametros por url
router.get("/:id", controller.getpedido);//la funcion seria getLanguage
//ruta para insertar peticiones con post
router.post("/", controller.addLanguage);
//ruta para DELETE
router.delete("/:id", controller.deleteLanguage);
//ruta para UPDATE
router.put("/:id_pedido", controller.updatePedido);

export default router; 
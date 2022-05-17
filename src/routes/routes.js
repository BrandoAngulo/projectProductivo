import { Router } from "express";
import { methods as pedidoController } from "../controllers/pedido.controller";

const router = Router();

//rutas 
// ruta para obtener peticiones con get
router.get("/", pedidoController.getpedidos);
//ruta para obtener la peticion recibiendo parametros por url
router.get("/:id_pedido", pedidoController.getpedido);//la funcion seria getLanguage
//ruta para insertar peticiones con post
router.post("/", pedidoController.addPedido);
//ruta para DELETE
router.delete("/:id_pedido", pedidoController.deletePedido);
//ruta para UPDATE
router.put("/:id_pedido", pedidoController.updatePedido);

export default router; 
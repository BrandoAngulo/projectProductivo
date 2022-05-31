import { Router } from "express";
import { methods as pedidoController } from "../controllers/pedido.controller";

const router = Router();

//rutas 
router.get("/", pedidoController.getpedidos);

router.get("/:id_pedido", pedidoController.getpedido);

router.post("/", pedidoController.addPedido);

router.delete("/:id_pedido", pedidoController.deletePedido);

router.put("/:id_pedido", pedidoController.updatePedido);

export default router; 
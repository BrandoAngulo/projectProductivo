import { Router } from "express";
import { methods as municipioController } from "../controllers/municipio.controller";

const router = Router();

//rutas 
router.get("/", municipioController.getMunicipios);

router.get("/:idMunicipio", municipioController.getMunicipio);

router.post("/", municipioController.addMunicipio);

router.delete("/:idMunicipio", municipioController.deleteMunicipio);

router.put("/:idMunicipio", municipioController.updateMunicipio);

export default router; 
import express from "express";
import * as service from "../service/metaService.js"

const router = express.Router();

router.post("/cadastrar", service.cadastrarMetas);

router.put("/editar/:metaId", service.editarMetas);

router.get("/buscar", service.buscarMetas);


export default router;
import express from "express";
import * as service from "../service/vendedorService.js"
import {verificarMetasTodosVendedores} from "../service/vendedorService.js";

const router = express.Router();

router.post("/cadastrar", service.cadastrarVendedor);

router.get("/listar", service.listarVendedores);

router.get("/meta-mensal/:vendedorId", service.verificarMetaMensalVendedor);

router.get("/meta-mensal-todos", service.verificarMetasTodosVendedores);

router.put("/editar/:vendedorId", service.editarCadastro);

router.delete("/remover/:vendedorId", service.removerCadastro);


export default router;
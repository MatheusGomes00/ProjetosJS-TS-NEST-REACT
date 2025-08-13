import express from "express";
import { createItem, getItens, deleteItens } from "../controllers/itemController.js"

const router = express.Router();

router.post("/criar", createItem);

router.get("/", getItens);

router.delete("/excluir/:id", deleteItens);


export default router;
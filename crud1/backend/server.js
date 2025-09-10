import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import itemRotas from "./routes/itemRotas.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();
connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/itens", itemRotas)

app.get("/", (req, res) => res.send("API funcionando..."));

app.listen(5001, () => console.log("Servidor rodando na porta 5001"));


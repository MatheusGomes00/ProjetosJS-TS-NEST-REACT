import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import itemRotas from "./routes/itemRotas.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();
connectDB();

/*app.use(cors({
    origin: ["http://localhost:5001", "http://localhost:3001"],
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));*/
//app.use(); // habilita todas urls...
app.use(express.json());

app.use("/api/itens", itemRotas)

app.get("/", (req, res) => res.send("API funcionando..."));

app.listen(5001, () => console.log("Servidor rodando na porta 5001"));


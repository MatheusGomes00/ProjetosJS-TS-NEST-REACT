import express from "express";
import dotenv from "dotenv";
import dbConfig from "./config/db.js";
import vendasRoutes from "./routes/rotasVendas.js";
import vendedorRoutes from "./routes/rotasVendedor.js";
import metasRoutes from "./routes/rotasMeta.js"

dotenv.config();
const PORT = process.env.PORT || 5005;
const app = express();

const iniciarServidor = async () => {
    try {
        await dbConfig();
        app.use(express.json());
        app.use("/api/vendas", vendasRoutes);
        app.use("/api/vendedor", vendedorRoutes);
        app.use("/api/metas", metasRoutes);
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}.`);
        });
    } catch(error) {
        console.log("Erro ao iniciar o servidor. Mensagem de erro:", error.message)
    }
}

iniciarServidor();





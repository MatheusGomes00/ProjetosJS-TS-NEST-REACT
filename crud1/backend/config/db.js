import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectando no MongoDB...");
    } catch (err) {
        console.error("Erro ao conectar no MongoDB", err.message)
    }
    console.log("MongoDB conectado");
}

export default connectDB;
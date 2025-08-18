import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB conectado.");
    } catch (error) {
        console.log("Erro ao conectar no MongoDB");
        throw new Error(error.message);
    }
}

export default connectMongo;
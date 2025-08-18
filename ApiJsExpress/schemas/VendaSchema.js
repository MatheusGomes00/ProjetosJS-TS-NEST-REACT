import mongoose, { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Venda = new Schema({
    // nomeVendedor: {
    //     type: String,
    //     required: true,
    //     message: "Nome do vendedor é obrigatório.", },
    vendedorId: {
        type: Schema.Types.ObjectId,
        ref: "Vendedor",
        required: [true, "ID vendedor é obrigatório."],
    },
    codigoVenda: {
        type: String,
        unique: true,
        required: true,
        default: () => uuidv4(),
    },
    categoria: {
        type: String,
        required: [true, "Categoria da venda é obrigatório."],
        enum: {
            values: ["Carro", "Moto", "Mobiliario", "Caminhao", "Aviao", "Seguro"],
            message: "enum validator failed for path `{PATH}` with value `{VALUE}`.",
        },
    },
    valorVenda: {
        type: Number,
        required: [true, "Valor da venda é obrigatório."],
    },
    dataVenda: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

export default mongoose.model('Venda', Venda);
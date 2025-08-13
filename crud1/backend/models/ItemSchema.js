import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    preco: { type: Number, required: true }
}, {
    timestamps: true
})

export default mongoose.model('Item', ItemSchema);
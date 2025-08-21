import { Schema, model } from 'mongoose';

const Meta = new Schema({
    tipoMeta: {
        type: String,
        enum: {
            values: ["bronze", "prata", "ouro"],
            message: "Falha ao validar enum `{PATH}` valor `{VALUE}` não existe."
        },
        required: [true, "Tipo de meta é obrigatorio."],
    },
    periodo: {
        type: String,
        enum: {
            values: ["mensal", "trimestral", "semestral", "anual"],
            message: "Falha ao validar enum `{PATH}` valor `{VALUE}` não existe."
        },
        required: [true, "Período da meta é obrigatorio."],
    },
    valorMeta: {
        type: Number,
        required: [true, "Valor da meta é obrigatorio."],
    },
});

// teste de indice composto para não permitir a insersão de documentos com os campos tipoMeta e período iguais
Meta.index({ tipoMeta: 1, periodo: 1}, {unique: true})

export default model("Meta", Meta);



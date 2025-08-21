import Meta from "../schemas/MetaSchema.js";

export async function cadastrarMetas(req, res) {
    try{
        const meta = {
            tipoMeta: req.body.tipoMeta,
            periodo: req.body.periodo,
            valorMeta: req.body.valorMeta,
        };
        const novaMeta = await Meta.create(meta);
        if (!novaMeta) {
           return res.status(400).json({erro: "verifique os parametros passados. tipoMeta, periodo e valorMeta"});
        }

        return res.status(201).json(novaMeta);
    } catch (erro) {
        return res.status(500).json({erro: erro.message})
    }
}

export async function editarMetas(req, res) {
    try{
        const alteracoes = {};
        if(req.body.tipoMeta) {
            alteracoes.tipoMeta = req.body.tipoMeta;
        }
        if(req.body.valorMeta) {
            alteracoes.valorMeta = req.body.valorMeta;
        }
        if(req.body.periodo) {
            alteracoes.periodo = req.body.periodo;
        }
        const metaId = req.params.metaId;
        const metaEditada = await Meta.findOneAndUpdate({metaId: metaId}, alteracoes, {
            new: true,
            runValidators: true
        });
        if(!metaEditada) {
            return res.status(400).json({erro: "Erro ao atualizar a meta. " +
                    "Verifique os valores passados metaId, tipoMeta, periodo e valorMeta. " +
                    "Não é permitido a insersão de documentos com os campos tipoMeta e periodo iguais."});
        }
        return res.status(200).json(metaEditada);
    } catch (erro) {
        return res.status(500).json({erro: erro.message})
    }
}

export async function buscarMetas(req, res) {
    try{
        const listaMetas = await Meta.find({});
        return res.status(200).json(listaMetas);
    } catch (erro) {
        return res.status(500).json({erro: erro.message})
    }
}


export default async function buscarMetasMensal() {
    try {
        return await Meta.find({periodo: "mensal"});
    } catch (erro) {
        return {erro: erro.message};
    }
}
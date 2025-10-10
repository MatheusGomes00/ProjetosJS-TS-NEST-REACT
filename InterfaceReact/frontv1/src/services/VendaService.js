export async function salvarVenda(formData, vendedorId) {
    const novaVenda = {
        cpfCliente: formData.get("cpfCliente"),
        categoria: formData.get("categoria"),
        valorVenda: formData.get("valorVenda"),
        observacoes: formData.get("observacoes"),
    }
    // const response = await fetch("/api/vendas/adicionar/{vendedorId}", {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     body: novaVenda,
    // });
    // if (!response.ok) throw new Error("Erro ao salvar cliente");
    // return response.json();
    return JSON.stringify(novaVenda);
}

export async function handleNovaVenda(formData) {
    const novaVenda = await salvarVenda(formData);
    console.log(novaVenda);
}

export async function buscarVenda(valorBusca){
    console.log(`Buscando venda ${valorBusca}`);
    return {"data": [{vendedorId: "68a64d259fd9cb051764411e", categoria: "Moto", valorVenda: 350,
            _id: "68a64d909fd9cb0517644122", codigoVenda: "1e0aa578-9e75-4fe5-9271-969ec895256b",
            dataVenda: "2025-08-20T22:34:56.452Z",
            clienteId: {
                nome: "Charline Shimoni",
                cpf: "629-42-6345"
            },}],
            "pagination": {
                "current_page": 1,
                "totalPages": 1,
                "pageSize": 10,
                "totalItems": 1
            }
    }
}

export async function handleEditarVenda(formData, codigoVenda) {
    // const venda = {
    //     cpfCliente: formData.get("cpfCliente"),
    //     categoria: formData.get("categoria"),
    //     valorVenda: formData.get("valorVenda"),
    //     observacoes: formData.get("observacoes"),
    // }
    // const response = await fetch("/api/vendas/editar/{codigoVenda}", {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     body: novaVenda,
    // });
    // if (!response.ok) throw new Error("Erro ao salvar cliente");
    // return response.json();
    // return JSON.stringify(venda);

    console.log("Editando venda código:", codigoVenda);
}

export async function handleDeletarVenda(venda) {
    console.log("Excluir:", venda.codigoVenda);
}

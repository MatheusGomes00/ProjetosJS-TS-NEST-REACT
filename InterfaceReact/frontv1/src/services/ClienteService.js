export async function salvarCliente(formData) {
    const novoCliente = {
        nome: formData.get("nome"),
        cpf: formData.get("cpf"),
        email: formData.get("email"),
        telefono: formData.get("telefone"),
        endereco: {
            cidade: formData.get("cidade"),
            estado: formData.get("estado"),
        },
        status: formData.get("status"),
    }

    // const response = await fetch("/api/clientes/salvarCliente", {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(novoCliente),
    // });
    // if (!response.ok) throw new Error("Erro ao salvar cliente");
    // return response.json();

    return JSON.stringify(novoCliente);
}

export async function handleNovoCliente(formData) {
    const novoCliente = await salvarCliente(formData);
    console.log(novoCliente);
}

export async function buscarCliente(nome) {
    console.log(`Buscando cliente ${nome}`);
    return {"data": [{ nome: "João Silva Pereira", email: "joao.silva@email.com", telefone: "(41) 98765-4321", cpf: "345.678.901-33",
        endereco: { cidade: "Curitiba", estado: "Paraná" }, status: "ativo" }],
        "pagination": {
            "current_page": 1,
            "totalPages": 1,
            "pageSize": 10,
            "totalItems": 1
        }
    }
}

export async function handleEditarCliente(formData) {
    console.log("Editando cliente CPF: ", JSON.stringify(formData.get("cpf")));
}
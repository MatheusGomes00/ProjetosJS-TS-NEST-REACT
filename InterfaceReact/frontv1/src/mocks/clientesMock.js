import { pt_BR, Faker } from '@faker-js/faker';
import {ListaClientes} from "./listaClientes.js";


export const clientes_mock1 = [
    { nome: "João Silva", email: "joao@email.com", telefone: "(11) 91234-5678", cpf: "123.456.789-00",
        endereco: { cidade: "Franca", estado: "São Paulo"}, status: "ativo" },
    { nome: "Maria Oliveira", email: "maria@email.com", telefone: "(11) 98765-4321", cpf: "987.654.321-00",
        endereco: { cidade: "Ribeirão Preto", estado: "São Paulo" }, status: "inativo" },
    { nome: "Carlos Santos", email: "carlos.santos@email.com", telefone: "(21) 97654-3210", cpf: "123.456.789-11",
        endereco: { cidade: "Rio de Janeiro", estado: "Rio de Janeiro" }, status: "bloqueado" },

    { nome: "Ana Pereira", email: "ana.pereira@email.com", telefone: "(31) 99876-5432", cpf: "234.567.890-22",
        endereco: { cidade: "São Sebastião do Paraíso", estado: "Minas Gerais" }, status: "inadimplente" },

    { nome: "João Silva Pereira", email: "joao.silva@email.com", telefone: "(41) 98765-4321", cpf: "345.678.901-33",
        endereco: { cidade: "Curitiba", estado: "Paraná" }, status: "ativo" }
];

const customLocale = {
    title: 'My custom locale',
    internet: {
        domainSuffix: ['test'],
    },
};

export const fakerCustom = new Faker({
    locale: [pt_BR, customLocale],
});

const cidadesEstados = [
    { cidade: "Franca", estado: "SP" },
    { cidade: "Campinas", estado: "SP" },
    { cidade: "Curitiba", estado: "PR" },
    { cidade: "Belo Horizonte", estado: "MG" },
];


export const clientes_mock2 = (page, pageSize) => {

    const totalItems = 20;
    const listaClientes = Array.from({ length: totalItems}, () => ({
        nome: fakerCustom.person.fullName(),
        email: fakerCustom.internet.email(),
        telefone: fakerCustom.phone.number(),
        cpf: fakerCustom.string.numeric(11),
        endereco: fakerCustom.helpers.arrayElement(cidadesEstados),
        status: fakerCustom.helpers.arrayElement(["ativo", "inativo", "inadimplente", "bloqueado"]),
    }));
    listaClientes.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
    const totalPages = Math.ceil(totalItems / pageSize);
    const start = (page -1) * pageSize;
    const end = start + pageSize;

    return {
        "data": listaClientes.slice(start, end),
        "pagination": {
            "currentPage": page,
            totalPages,
            pageSize,
            totalItems,
        }
    };
}

export const clientes_mock3 = (page, pageSize, filtroOpt) => {
    let listaClientes = ListaClientes();
    listaClientes.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
    if(filtroOpt){
        listaClientes = listaClientes.filter((cliente) => cliente.status === filtroOpt)
    }
    const totalItems = listaClientes.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const start = (page -1) * pageSize;
    const end = start + pageSize;
    return {
        "data": listaClientes.slice(start, end),
        "pagination": {
            "currentPage": page,
            totalPages,
            pageSize,
            totalItems,
        }
    }
}
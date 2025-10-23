import {ListaVendas} from "./listaVendas.js";

export const vendasMock = (page, pageSize, filtroOpt) => {
    let listaVendas = ListaVendas();
    listaVendas.sort((a, b) => new Date(b.dataVenda) - new Date(a.dataVenda));
    if(filtroOpt){
        listaVendas = listaVendas.filter((venda) => venda.categoria === filtroOpt);
    }
    const totalItems = listaVendas.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const start = (page -1) * pageSize;
    const end = start + pageSize;
    return {
        "data": listaVendas.slice(start, end),
        "pagination": {
            "currentPage": page,
            totalPages,
            pageSize,
            totalItems,
        }
    }
}
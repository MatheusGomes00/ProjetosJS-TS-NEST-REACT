import {ListaVendas} from "./listaVendas.js";

export const vendasMock = (page, pageSize) => {
    const totalItems = 25;
    const listaVendas = ListaVendas();
    listaVendas.sort((a, b) => new Date(b.dataVenda) - new Date(a.dataVenda));
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
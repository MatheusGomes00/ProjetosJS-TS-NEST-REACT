import React, {useEffect, useState} from "react";
import {vendasMock} from "../../mocks/vendasMock.js";
import {Cabecalho} from "../ui/heading.jsx";
import {SearchBar} from "../ui/barraPesquisa.jsx";
import {VendaButton} from "../ui/buttons.jsx";
import {createPortal} from "react-dom";
import {VendasModal} from "./VendasModal.jsx";
import {buscarVenda, handleNovaVenda} from "../../services/VendaService.js";
import {FiltroCategoriaVenda} from "../ui/filtroSection.jsx";
import {VendasTable} from "./VendasTable.jsx";
import {Pagination} from "../ui/paginacao.jsx";
import {handleDeletarVenda, handleEditarVenda} from "../../services/VendaService.js";


const Vendas = () => {
    const [vendas, setVendas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [filtroCategoria, setFiltroCategoria] = useState("");
    const [showModalAdicionarVenda, setShowModalAdicionarVenda] = useState(false);
    const [showModalEditarVenda, setShowModalEditarVenda] = useState(false);
    const [vendaSelecionada, setVendaSelecionada] = useState();


    const listarVendas = async () => {
        //const response = await handleBuscarVendas();
        const mock = vendasMock(currentPage, 10);
        setVendas(mock.data);
        setTotalPage(mock.pagination.totalPages);
    }

    useEffect(() => {
        const mock = vendasMock(currentPage, 10);
        setVendas(mock.data);
        setTotalPage(mock.pagination.totalPages);
    }, [currentPage]);

    useEffect(() => {
        const mock = vendasMock(currentPage, 10, filtroCategoria);
        // const filtradas = mock.data.filter((venda) => filtroCategoria === "" || venda.categoria === filtroCategoria);
        setVendas(mock.data);
        setTotalPage(mock.pagination.totalPages)
    }, [currentPage, filtroCategoria]);

    const handleBuscarVenda = async (valorBusca) => {
        const response = await buscarVenda(valorBusca);
        setVendas(response.data);
        setTotalPage(response.pagination.totalPages);
    }

    return (
        <div className={"p-6"}>
            <Cabecalho text="Vendas Cadastradas">
                <div className={"flex flex-col mb-4 md:flex-row items-center justify-center gap-6 w-full"}>
                    <SearchBar text={"Pesquisar venda"}
                               busca={handleBuscarVenda}
                               voltarLista={listarVendas}
                    />
                    <VendaButton onClick={() => setShowModalAdicionarVenda(true)}/>
                    {showModalAdicionarVenda && createPortal(
                        <VendasModal text={"Registrar venda"} modalAction={handleNovaVenda}
                                      onClose={() => setShowModalAdicionarVenda(false)}
                        />,
                        document.getElementById('modal-root')
                    )}
                </div>
                <FiltroCategoriaVenda
                    selectedCategoria={filtroCategoria}
                    onChange={(e) => {
                        setFiltroCategoria(e.target.value);
                        setCurrentPage(1)
                    }}
                />
            </Cabecalho>
            <div>
                <VendasTable
                    vendas={vendas}
                    onDelete={handleDeletarVenda}
                    onEdit={(venda) => {
                        setVendaSelecionada(venda);
                        setShowModalEditarVenda(true);
                    }}
                />
                {showModalEditarVenda && createPortal(
                    <VendasModal text={"Editar venda"} modalAction={handleEditarVenda}
                                 onClose={() => {
                                    setVendaSelecionada(null);
                                    setShowModalEditarVenda(false);
                                }}
                                 venda={vendaSelecionada}
                    />,
                    document.getElementById('modal-root')
                )}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPage}
                    onPageChange={setCurrentPage}
                />
            </div>

        </div>
    );
}

export default Vendas;
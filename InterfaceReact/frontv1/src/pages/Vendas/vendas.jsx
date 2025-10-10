import React, {useEffect, useState} from "react";
import {vendasMock} from "../../mocks/vendasMock.js";
import {Cabecalho} from "../../components/ui/heading.jsx";
import {SearchBar} from "../../components/ui/barraPesquisa.jsx";
import {BlueButton} from "../../components/ui/buttons.jsx";
import vendasImg from "../../assets/vendas1.svg";
import {createPortal} from "react-dom";
import {VendasModal} from "../../components/vendas/VendasModal.jsx";
import {buscarVenda, handleNovaVenda} from "../../services/VendaService.js";
import {FiltroCategoriaVenda} from "../../components/ui/filtroSection.jsx";
import {VendasTable} from "../../components/vendas/VendasTable.jsx";
import {Pagination} from "../../components/ui/paginacao.jsx";
import {handleDeletarVenda, handleEditarVenda} from "../../services/VendaService.js";


const Vendas = () => {
    const [vendas, setVendas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [filtroCategoria, setFiltroCategoria] = useState("");
    const [showModalVenda, setShowModalVenda] = useState(false);
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
        const mock = vendasMock(currentPage, 10);
        const filtradas = mock.data.filter((venda) => filtroCategoria === "" || venda.categoria === filtroCategoria);
        setVendas(filtradas);
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
                    <BlueButton onClick={() => setShowModalVenda(true)}>
                        <img src={vendasImg} className="w-14 h-14"  alt={"icone venda"} />
                        Nova Venda
                    </BlueButton>
                    {showModalVenda && createPortal(
                        <VendasModal text={"Registrar venda"} modalAction={handleNovaVenda}
                                      onClose={() => setShowModalVenda(false)}
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
                        setShowModalVenda(true);
                    }}
                />
                {showModalVenda && createPortal(
                    <VendasModal text={"Editar venda"} modalAction={handleEditarVenda}
                                 onClose={() => setShowModalVenda(false)}
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
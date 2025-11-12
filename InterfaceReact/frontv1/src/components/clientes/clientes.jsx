import React, {useEffect, useState} from 'react';
import clientesImg from "../../assets/clientes1.svg";
import {BlueButton} from "../ui/buttons.jsx";
import {SearchBar} from "../ui/barraPesquisa.jsx";
import {ClienteTable} from "./ClienteTable.jsx";
import {clientes_mock3} from "../../mocks/clientesMock.js"
import {Pagination} from "../ui/paginacao.jsx";
import {Cabecalho} from "../ui/heading.jsx";
import {FiltroClienteStatus} from "../ui/filtroSection.jsx";
import {ClienteModal} from "./ClienteModal.jsx";
import {buscarCliente, handleNovoCliente, handleEditarCliente} from "../../services/ClienteService.js";
import {createPortal} from "react-dom";


const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [statusFiltro, setStatusFiltro] = useState("");
    const [showModalAdicionarCliente, setShowModalAdicionarCliente] = useState(false);
    const [showModalEditarCliente, setShowModalEditarCliente] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState();

    const listarClientes = async () => {
        //const response = await handleBuscarClientes();
        const mock = clientes_mock3(currentPage, 10);
        setClientes(mock.data);
        setTotalPage(mock.pagination.totalPages)
    }

    useEffect(() => {
        // listarClientes();
        const mock = clientes_mock3(currentPage, 10);
        setClientes(mock.data);
        setTotalPage(mock.pagination.totalPages)
    }, [currentPage]);


    useEffect(() => {
        const mock = clientes_mock3(currentPage, 10, statusFiltro);
        // const filtrados = mock.data.filter((cliente) => statusFiltro === "" || cliente.status === statusFiltro);
        setClientes(mock.data);
        setTotalPage(mock.pagination.totalPages)
    }, [currentPage, statusFiltro]);

    const handleBuscarCliente = async (valorBusca) => {
        const response = await buscarCliente(valorBusca);
        setClientes(response.data);
        setTotalPage(response.pagination.totalPages);
    }

    const handleWhatsapp = (cliente) => console.log("WhatsApp:", cliente.telefone);
    // const handleEdit = (cliente) => console.log("Editar:", cliente.nome);
    const handleDelete = (cliente) => console.log("Excluir:", cliente.nome);

    return (
        <div className={"p-6"}>
            <Cabecalho text="Clientes Cadastrados">
                <div className={"flex flex-col mb-4 md:flex-row items-center justify-center gap-6 w-full"}>
                    <SearchBar text={"Pesquisar cliente"}
                               busca={handleBuscarCliente}
                               voltarLista={listarClientes}
                    />
                    <BlueButton onClick={() => setShowModalAdicionarCliente(true)}>
                        <img src={clientesImg} className="w-14 h-14"  alt={"icone cliente"} />
                        Novo Cliente
                    </BlueButton>
                    {showModalAdicionarCliente && createPortal(
                        <ClienteModal text={"Cadastrar Cliente"} modalAction={handleNovoCliente}
                                      onClose={() => setShowModalAdicionarCliente(false)}
                        />,
                        document.getElementById('modal-root')
                    )}
                </div>
                <FiltroClienteStatus
                    selectedStatus={statusFiltro}
                    onChange={(e) => {
                        setStatusFiltro(e.target.value);
                        setCurrentPage(1)
                    }}
                />
            </Cabecalho>
            <div>
                <ClienteTable
                    clientes={clientes}
                    onWhatsapp={handleWhatsapp}
                    onDelete={handleDelete}
                    onEdit={(cliente) => {
                        setClienteSelecionado(cliente);
                        setShowModalEditarCliente(true);
                    }}
                />
                {showModalEditarCliente && createPortal(
                    <ClienteModal text={"Editar Cliente"} modalAction={handleEditarCliente}
                                      onClose={() => {
                                        setShowModalEditarCliente(false)
                                        setClienteSelecionado(null);
                                    }}
                                    cliente={clienteSelecionado}
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
};

export default Clientes;
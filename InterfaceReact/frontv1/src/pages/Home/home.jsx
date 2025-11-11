import {CardInfo, CardMeta} from "../../components/ui/cards.jsx";
import {BlueButton, VendaButton} from "../../components/ui/buttons.jsx";
import clientesImg from "../../assets/clientes1.svg";
import React, {useState} from "react";
import {createPortal} from "react-dom";
import {ClienteModal} from "../../components/clientes/ClienteModal.jsx";
import {handleNovoCliente} from "../../services/ClienteService.js";
import {handleNovaVenda} from "../../services/VendaService.js";
import {VendasModal} from "../../components/vendas/VendasModal.jsx";



const Home = () => {
    const [showModalCliente, setShowModalCliente] = useState(false);
    const [showModalAdicionarVenda, setShowModalAdicionarVenda] = useState(false);

    return (
        <div className={"grid grid-cols-1 md:grid-cols-4 gap-6"}>
            <CardInfo title="Vendas no mês">12</CardInfo>
            <CardInfo title={"Total vendido"}> R$ 5.300,00</CardInfo>
            <CardMeta title={"Meta mensal"} valorAtual={5300} meta={10000}/>

            <div className={"flex flex-col items-center justify-center gap-4"}>
                <VendaButton onClick={() => setShowModalAdicionarVenda(true)}/>
                {showModalAdicionarVenda && createPortal(
                    <VendasModal text={"Registrar venda"} modalAction={handleNovaVenda}
                                 onClose={() => setShowModalAdicionarVenda(false)}
                    />,
                    document.getElementById('modal-root')
                )}
                <BlueButton onClick={() => setShowModalCliente(true)}>
                    <img src={clientesImg} className="w-16 h-16"  alt={"icone cliente"} />
                    Novo Cliente
                </BlueButton>
                {showModalCliente && createPortal(
                    <ClienteModal text={"Cadastrar Cliente"} modalAction={handleNovoCliente}
                                  onClose={() => setShowModalCliente(false)}
                    />,
                    document.getElementById('modal-root')
                )}
            </div>
        </div>
    );
}

export default Home;
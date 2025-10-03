import {CardInfo, CardMeta} from "../../components/cards.jsx";
import {BlueButton, GreenButton} from "../../components/buttons.jsx";
import vendas from "../../assets/vendas1.svg";
import clientes from "../../assets/clientes1.svg";
import React from "react";


const Home = () => {
    const handleNovaVenda = () => {
        console.log("Nova venda adicionada!");
    }
    const handleNovoCliente = () => {
        console.log("Novo cliente adicionado!");
    }

    return (
        <div className={"grid grid-cols-1 md:grid-cols-4 gap-6"}>
            <CardInfo title="Vendas no mês">12</CardInfo>
            <CardInfo title={"Total vendido"}> R$ 5.300,00</CardInfo>
            <CardMeta title={"Meta mensal"} valorAtual={5300} meta={10000}/>

            <div className={"flex flex-col items-center justify-center gap-4"}>
                <GreenButton onClick={handleNovaVenda}>
                    <img src={vendas} className="w-16 h-16"  alt={"icone da vendas"} />
                    Nova Venda
                </GreenButton>
                <BlueButton onClick={handleNovoCliente}>
                    <img src={clientes} className="w-16 h-16"  alt={"icone cliente"} />
                    Novo Cliente
                </BlueButton>
            </div>
        </div>
    );
}

export default Home;
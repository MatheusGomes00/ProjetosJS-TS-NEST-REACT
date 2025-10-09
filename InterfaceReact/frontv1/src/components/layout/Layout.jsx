import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, SidebarBody, SidebarSection, SidebarItem, SidebarLabel, SidebarHeading } from "./components/sidebar";
import clientes from "./assets/clientes1.svg";
import metas from "./assets/metas1.svg";
import vendas from "./assets/vendas1.svg";
import cadastro from "./assets/cadastro3.svg";
import home from "./assets/home1.svg";
import heading from "./assets/heading1.svg"


const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeSidebar = () => {
        setIsOpen(false);
    }

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isOpen} className="bg-gray-800 text-white" >
                <SidebarBody>
                    <div onClick={closeSidebar}>
                        <SidebarHeading className="flex items-center py-2 gap-2">
                            <img src={heading} className="w-30 h-30" alt="icone heading"/>
                            portal de vendas
                        </SidebarHeading>
                        <SidebarSection>

                            <SidebarItem to="/home">
                                <img src={home} className="w-20 h-20"  alt={"icone da home"} />
                                <SidebarLabel>Início</SidebarLabel>
                            </SidebarItem>
                        </SidebarSection>
                        <SidebarSection>
                            <SidebarItem to="/clientes">
                                <img src={clientes} className="w-20 h-20"  alt={"icone da clientes"} />
                                <SidebarLabel>Clientes</SidebarLabel>
                            </SidebarItem>
                        </SidebarSection>
                        <SidebarSection>
                            <SidebarItem to="/vendas">
                                <img src={vendas} className="w-20 h-20"  alt={"icone da vendas"} />
                                <SidebarLabel>Vendas</SidebarLabel>
                            </SidebarItem>
                        </SidebarSection>
                        <SidebarSection>
                            <SidebarItem to="/metas">
                                <img src={metas} className="w-20 h-20"  alt={"icone da metas"} />
                                <SidebarLabel>Metas</SidebarLabel>
                            </SidebarItem>
                        </SidebarSection>
                        <SidebarSection>
                            <SidebarItem to="/cadastro">
                                <img src={cadastro} className="w-20 h-20"  alt={"icone de cadastro"} />
                                <SidebarLabel>Cadastro</SidebarLabel>
                            </SidebarItem>
                        </SidebarSection>
                    </div>
                </SidebarBody>
            </Sidebar>
            <div className="flex-1 flex flex-col md:ml-0 transition-all duration-300">
                <header className="flex items-center justify-between bg-gray-100 p-4 shadow md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                    >
                        ☰
                    </button>
                    <h1 className="text-lg font-bold text-gray-800">Portal de Vendas</h1>
                </header>

                <main className="flex-1 bg-gray-400 p-4 overflow-auto md:p-6">
                    <Outlet />
                </main>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                />
            )}
        </div>
    );
};

export default Layout;

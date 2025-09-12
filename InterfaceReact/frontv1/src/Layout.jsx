import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, SidebarBody, SidebarSection, SidebarItem, SidebarLabel } from "./components/sidebar";
import homeIcon  from "./assets/home1.svg";
import clientes from "./assets/clientes1.svg";
import metas from "./assets/metas1.svg";
import vendas from "./assets/vendas1.svg";
import cadastro from "./assets/cadastro3.svg";

const Layout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar className="w-64 bg-gray-800 text-white flex flex-col">
                <SidebarBody>
                    <SidebarSection>
                        <SidebarItem to="/home">
                            <img src={homeIcon} className="w-20 h-20"  alt={"icone da home"} />
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
                </SidebarBody>
            </Sidebar>

            <main className="flex-1 bg-gray-100 p-6 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;

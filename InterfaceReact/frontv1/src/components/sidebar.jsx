import React from "react";
import { Link, useLocation } from "react-router-dom";

/* Componente principal da sidebar */
export const Sidebar = ({ isOpen, children, className }) => {
    return (
        <div className={`fixed md:relative flex flex-col inset-y-0 left-0 z-50 w-64
                         transform transition-transform duration-300
                         md:translate-x-0
                         ${isOpen ? "translate-x-0" : "-translate-x-full" } 
                         ${className || ""}`}>
            {children}
        </div>
    );
};

/* Corpo da sidebar */
export const SidebarBody = ({ children, className }) => {
    return (
        <nav className={`flex-1 flex flex-col overflow-y-auto ${className}`}>
            {children}
        </nav>
    );
};

/* Seção da sidebar (grupo de itens) */
export const SidebarSection = ({ children, className }) => {
    return (
        <div className={`mt-4 ${className}`}>
            {children}
        </div>
    );
};

/* Cabeçalho de seção */
export const SidebarHeading = ({ children, className }) => {
    return (
        <div className={`px-4 py-2 text-gray-400 uppercase text-xs font-semibold ${className}`}>
            {children}
        </div>
    );
};

/* Item de navegação */
export const SidebarItem = ({ children, to, current, className }) => {
    const location = useLocation();
    const isActive = current || location.pathname === to;

    return (
        <Link
            to={to}
            className={`
                flex items-center px-4 py-2 mb-1 rounded
                hover:bg-gray-700 transition-colors duration-200
                ${isActive ? "bg-gray-700 text-white" : "text-gray-400"}
                ${className || ""}
            `}
        >
            {children}
        </Link>
    );
};

/* Label dentro do item */
export const SidebarLabel = ({ children, className }) => {
    return (
        <span className={`ml-2 ${className || ""}`}>
      {children}
    </span>
    );
};


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/home/home';
import Layout from '../components/layout/Layout.jsx';
import Clientes from '../components/clientes/clientes';
import Perfil from '../components/perfil/perfil.jsx';
import Metas from '../components/metas/metas';
import Vendas from '../components/vendas/vendas';

export default function AppRoutes() {
    return (
        <BrowserRouter basename='sales-track'>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Navigate to="/home" replace={true}/> } />
                    <Route path="/home" element={<Home />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/metas" element={<Metas />} />
                    <Route path="/vendas" element={<Vendas />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/home';
import Layout from '../Layout'
import Clientes from '../pages/Clientes/clientes';
import Cadastro from '../pages/Cadastro/cadastro';
import Metas from '../pages/Metas/metas';
import Vendas from '../pages/Vendas/vendas';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Navigate to="/home" replace={true}/> } />
                    <Route path="/home" element={<Home />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/metas" element={<Metas />} />
                    <Route path="/vendas" element={<Vendas />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
import React from "react";
import { Route, Routes } from "react-router-dom"
import TelaCadastro from "./pages/TelaCadastro/TelaCadastro";
import TelaHome from "./pages/TelaHome/TelaHome";

export default function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<TelaHome />} />
            <Route path='/cadastro' element={<TelaCadastro />} />

        </Routes>
    )
}
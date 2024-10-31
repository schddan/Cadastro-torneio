import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CampeonatosAtivos from "./CampeonatosAtivos/CampeonatosAtivos";
import Recomendacoes from "./Recomendacoes/Recomendacoes";
import ResultadosRecentes from "./ResultadosRecentes/ResultadosRecentes";
import "./TelaHome.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <CampeonatosAtivos />
        <Recomendacoes />
        <ResultadosRecentes />
      </div>
    </div>
  );
}

export default Home;
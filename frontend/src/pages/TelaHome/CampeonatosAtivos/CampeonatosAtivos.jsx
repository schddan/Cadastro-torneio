import React from "react";
import "./CampeonatosAtivos.css";

function CampeonatosAtivos() {
  return (
    <section className="active-championships">
      <h2>Campeonatos Ativos</h2>
      <ul>
        <li>
          <p>Campeonato 1</p>
          <button>Acompanhar</button>
        </li>
        <li>
          <p>Campeonato 2</p>
          <button>Acompanhar</button>
        </li>
      </ul>
      <button className="create-new">Criar Novo Campeonato</button>
    </section>
  );
}

export default CampeonatosAtivos;

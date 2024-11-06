import React from "react";
import "./Recomendacoes.css";

function Recomendacoes() {
  return (
    <section className="recommendations">
      <h2>Recomendações</h2>
      <ul>
        <li>
          <p>Campeonato Recomendado 1</p>
          <button>Inscrever-se</button>
        </li>
        <li>
          <p>Campeonato Recomendado 2</p>
          <button>Inscrever-se</button>
        </li>
      </ul>
    </section>
  );
}

export default Recomendacoes;

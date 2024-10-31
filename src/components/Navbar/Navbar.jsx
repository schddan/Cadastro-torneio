import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logoNavBar" src="https://logospng.org/download/fifa/fifa-2048.png"></img>
      <ul>
        <li><a href="#championships">Meus Campeonatos</a></li>
        <li><a href="#new">Novo Campeonato</a></li>
        <li><a href="#ranking">Ranking</a></li>
        <li><a href="#recommendations">Recomendações</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
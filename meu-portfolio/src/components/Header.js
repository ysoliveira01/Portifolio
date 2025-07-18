// src/components/Header.js
import React from 'react';
import './Header.css'; // Crie este arquivo para os estilos do Header

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Seu Nome</h1>
        <nav className="nav">
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li> {/* O site de exemplo usa links para redes sociais no footer, mas um link de contato pode ser útil aqui */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
// src/components/Header.js
import React, { useState } from 'react'; // Importe useState para gerenciar o estado do menu
import './Header.css';

function Header() {
  // Estado para controlar a visibilidade do menu móvel
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Ícone de Pinguim como "logo" */}
        <div className="logo-icon">
          {/* Por enquanto, usaremos um emoji ou um placeholder SVG simples */}
          🐧 {/* Ou um SVG de pinguim se você tiver um */}
        </div>

        {/* Botão do menu hambúrguer para dispositivos móveis/pequenos */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        {/* Menu de navegação */}
        {/* Adicione a classe 'open' se o menu estiver aberto */}
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projetos</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;